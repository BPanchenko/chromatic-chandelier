const path = require("node:path");

const PKG_ROOT = process.cwd();
const DIR_STATIC = path.resolve(PKG_ROOT, "node_scripts/web-server/public");
const DIR_TESTS = path.resolve(PKG_ROOT, "__tests__");
const HOST = new URL("/", "http://localhost:8125");

const MIME = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".woff": "application/font-woff",
  ".woff2": "application/font-woff2",
  default: "application/octet-stream",
};

module.exports = {
  HOST,
  DIR_STATIC,
  DIR_TESTS,
  MIME,
  baseURL: HOST.toString(),
};
