const path = require("node:path");

const PKG_ROOT = path.resolve(__dirname, "../");
const TEST_DIR = path.resolve(PKG_ROOT, "__tests__");
const HOST = new URL("/", "http://localhost:8125");
const STATIC_ROOT = path.join(PKG_ROOT, "node_scripts/web-server/root");

module.exports = {
  baseURL: HOST.toString(),
  HOST,
  PKG_ROOT,
  STATIC_ROOT,
  TEST_DIR,
};
