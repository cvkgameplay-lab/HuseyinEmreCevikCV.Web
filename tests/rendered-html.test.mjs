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

test("server-renders the professional CV portfolio", async () => {
  const currentYear = new Date().getFullYear();
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Hüseyin Emre Çevik \| Senior Software Developer<\/title>/i);
  assert.match(html, /<h1><span>Hüseyin Emre<\/span><span>Çevik<\/span><\/h1>/);
  assert.match(html, /Senior Software Developer/);
  assert.match(html, /href="\/Huseyin-Emre-Cevik-CV\.pdf"/);
  assert.match(html, /download="Huseyin-Emre-Cevik-CV\.pdf"/);
  assert.match(html, /href="tel:\+905414981116"/);
  assert.match(html, /href="mailto:hemrecevik@gmail\.com"/);
  assert.doesNotMatch(html, /Kullanıcı adı/);
  assert.match(html, /portfolio-shell/);
  assert.match(html, /profile-panel/);
  assert.match(html, /experience-card/);
  assert.match(html, /experience-list/);
  assert.match(html, /Backend/);
  assert.match(html, /Frontend/);
  assert.match(html, /Database/);
  assert.match(html, /Tools &amp; Practices/);
  assert.doesNotMatch(html, /<span>Backend<\/span>/);
  assert.doesNotMatch(html, /<span>Frontend<\/span>/);
  assert.doesNotMatch(html, /<span>Full-Stack<\/span>/);
  assert.match(html, /Fimple/);
  assert.match(html, /Tera Bank/);
  assert.match(html, /03\/2026 - Devam/);
  assert.match(html, /Dgpays/);
  assert.match(html, /04\/2023 - 01\/2026/);
  assert.match(html, /Softtech/);
  assert.match(html, /09\/2021 - 01\/2023/);
  assert.match(html, /Upenerji/);
  assert.match(html, /11\/2020 - 09\/2021/);
  assert.match(html, /alt="Fimple logosu"/);
  assert.match(html, /alt="Dgpays logosu"/);
  assert.match(html, /alt="Softtech logosu"/);
  assert.match(html, /alt="Upenerji logosu"/);
  assert.match(html, /Başarılar ve Belgeler/);
  assert.match(html, /GNO/);
  assert.match(html, new RegExp(`©[\\s\\S]*${currentYear}[\\s\\S]*Hüseyin Emre Çevik`));
  assert.doesNotMatch(html, /©[\s\S]*1970[\s\S]*Hüseyin Emre Çevik/);

  const timelineHtml = html.slice(html.indexOf("timeline"));
  assert.match(timelineHtml, /Fimple[\s\S]*Dgpays[\s\S]*Softtech[\s\S]*Upenerji/);
  assert.doesNotMatch(html, /Doğum Tarihi|Medeni Durum|Askerlik|B Sınıfı/);
  assert.doesNotMatch(html, /cv-sidebar|cv-sheet|resume-sheet/);
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
  assert.match(layout, /openGraph/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});

test("ships local logo and PDF assets", async () => {
  const [pdf] = await Promise.all([
    readFile(new URL("../public/Huseyin-Emre-Cevik-CV.pdf", import.meta.url)),
    access(new URL("../public/brand/fimple.png", import.meta.url)),
    access(new URL("../public/brand/dgpays.svg", import.meta.url)),
    access(new URL("../public/brand/softtech.svg", import.meta.url)),
    access(new URL("../public/brand/upenerji.jpg", import.meta.url)),
    access(new URL("../public/profile.jpg", import.meta.url)),
    access(new URL("../public/favicon.svg", import.meta.url)),
  ]);

  const pageCount = pdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length ?? 0;
  assert.equal(pageCount, 1);
  assert.equal(pdf.includes(Buffer.from("file:///")), false);
});
