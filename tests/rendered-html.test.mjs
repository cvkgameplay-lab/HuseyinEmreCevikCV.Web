import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the modern CV portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hüseyin Emre Çevik \| Senior Software Developer<\/title>/i);
  assert.match(html, /<h1>Hüseyin Emre Çevik<\/h1>/);
  assert.match(html, /Senior Software Developer/);
  assert.match(html, /href="\/huseyin-emre-cevik-cv\.pdf"/);
  assert.match(html, /download/);
  assert.match(html, /Fimple/);
  assert.match(html, /Tera Bank/);
  assert.match(html, /03\/2026 - Devam/);
  assert.match(html, /Dgpays/);
  assert.match(html, /01\/2023 - 03\/2026/);
  assert.match(html, /src="\/brand\/fimple\.png"/);
  assert.match(html, /src="\/brand\/dgpays\.svg"/);
  assert.match(html, /src="\/brand\/softtech\.svg"/);
  assert.match(html, /Experian/);
  assert.match(html, /src="\/profile\.jpg"/);
  assert.match(html, /cv-sheet/);
  assert.match(html, /cv-sidebar/);
  assert.match(html, /experience-list/);
  assert.match(html, /hemrecevik@gmail\.com/);
  const timelineHtml = html.slice(html.indexOf("experience-list"));
  assert.match(timelineHtml, /Upenerji[\s\S]*Softtech[\s\S]*Dgpays[\s\S]*Fimple/);
  assert.doesNotMatch(html, /impact-section/);
  assert.doesNotMatch(html, /experience-slide/);
  assert.doesNotMatch(html, /Bankacılık ürünlerini servis mimarisiyle hayata geçiriyorum/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps starter assets removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});

test("ships local logo and PDF assets", async () => {
  const [pdf] = await Promise.all([
    readFile(new URL("../public/huseyin-emre-cevik-cv.pdf", import.meta.url)),
    access(new URL("../public/brand/fimple.png", import.meta.url)),
    access(new URL("../public/brand/dgpays.svg", import.meta.url)),
    access(new URL("../public/brand/softtech.svg", import.meta.url)),
  ]);

  const pageCount = pdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length ?? 0;
  assert.equal(pageCount, 1);
  assert.equal(pdf.includes(Buffer.from("file:///")), false);
});
