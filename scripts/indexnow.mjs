#!/usr/bin/env node
// IndexNow real-time push for Bing/Yandex/Seznam.
// Usage:
//   node scripts/indexnow.mjs                       -> submit all URLs from sitemap.xml
//   node scripts/indexnow.mjs /leistungen /kontakt  -> submit specific paths
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = "www.sentinel-services.de";
const KEY = "dce3e6a4c38454d9470cb306f396c81a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

function urlsFromSitemap() {
  const sitemap = readFileSync(resolve(__dirname, "../public/sitemap.xml"), "utf8");
  return [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function urlsFromArgs(args) {
  return args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? "" : "/"}${p}`));
}

const args = process.argv.slice(2);
const urlList = args.length ? urlsFromArgs(args) : urlsFromSitemap();

const payload = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

console.log(`Submitting ${urlList.length} URL(s) to IndexNow…`);
const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const text = await res.text();
if (res.ok || res.status === 202) {
  console.log(`OK (${res.status}) – URLs accepted by IndexNow.`);
} else {
  console.error(`FAILED (${res.status}): ${text}`);
  process.exit(1);
}
