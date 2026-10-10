#!/usr/bin/env node
// Checks local catalog structure and affiliate URL format. Does not scrape Amazon.
const fs = require("node:fs");
const vm = require("node:vm");
const data = fs.readFileSync("products.js", "utf8");
const ctx = vm.createContext({});
vm.runInContext(data + "\nthis.catalog = raw; this.links = verifiedProductLinks;", ctx, { timeout: 2000 });
const products = ctx.catalog, links = ctx.links;
const errors = [];
if (!Array.isArray(products) || products.length !== 31) errors.push("Expected 31 products");
const ids = new Set();
for (let i=0; i<products.length; i++) {
  const p=products[i];
  if(!Array.isArray(p)||p.length!==6) errors.push("Invalid product row at index "+i);
  if(typeof p?.[0]!=="string" || !p[0].trim()) errors.push("Missing title for product "+i);
  ids.add(String(i));
}
for(const [id,url] of Object.entries(links)){
  if(!ids.has(id)) errors.push("Affiliate URL references unknown product "+id);
  if(typeof url!=="string" || !/^https:\/\/www\.amazon\.de\/dp\/[A-Z0-9]{10}\?tag=wunschwelt07-21$/.test(url))
    errors.push("Invalid Amazon direct URL for product "+id);
}
const html = fs.readFileSync("index.html","utf8");
if(!html.includes('<script src="./products.js"></script>')) errors.push("Missing catalog script");
if(!html.includes("Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.")) errors.push("Missing affiliate disclosure");
if(errors.length){console.error(errors.join("\n"));process.exit(1);}
console.log("OK: "+products.length+" products, "+Object.keys(links).length+" formatted affiliate URLs; remote product identity NOT verified.");
