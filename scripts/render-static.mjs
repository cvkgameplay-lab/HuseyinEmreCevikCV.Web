import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("static", `${process.pid}-${Date.now()}`);

const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://huseyinemrecevik.com/", {
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

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const contentType = response.headers.get("content-type") ?? "";
if (!contentType.toLowerCase().startsWith("text/html")) {
  throw new Error(`Static render returned ${contentType || "unknown content type"}`);
}

const html = (await response.text()).replaceAll("https://huseyinemrecevik.com/favicon.svg", "/favicon.svg");
const outFile = `${root}/dist/client/index.html`;

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, html, "utf8");

console.log(`Rendered ${outFile}`);
