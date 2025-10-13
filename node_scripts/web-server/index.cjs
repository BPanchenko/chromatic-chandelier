const fs = require("node:fs"),
  http = require("node:http"),
  log = require("node-color-log"),
  path = require("node:path");

const {
  baseURL,
  HOST,
  STATIC_ROOT,
  PKG_ROOT,
} = require("../../.config/web-server.cjs");

http
  .createServer(function (request, response) {
    let resource = request.url === "/" ? "./index.html" : "." + request.url;
    log.italic().log(resource);
    try {
      let filepath = resolveAbsolutePath(resource);
      log.success(filepath);
      fs.readFile(filepath, (error, content) => {
        if (error) sendServerError(response, error);
        else {
          let extension = String(path.extname(resource)).toLowerCase();
          let mimetype = {
            _default: "application/octet-stream",
            ".css": "text/css",
            ".html": "text/html",
            ".js": "text/javascript",
            ".json": "application/json",
            ".svg": "image/svg+xml",
            ".woff": "application/font-woff",
            ".woff2": "application/font-woff2",
          };
          response.writeHead(200, {
            "Content-Type": mimetype[extension] || mimetype._default,
          });
          response.end(content, "utf-8");
        }
      });
    } catch {
      sendNotFoundResponse(response);
    }
  })
  .listen(parseInt(HOST.port), HOST.hostname, 511, () =>
    log.info("Server running at " + baseURL)
  );

/**
 * Path segment resolves to an absolute path if it is existed file.
 * @param {string} file Relative path to file
 * @returns {string | never} Absolute path to file or throw an error
 */
function resolveAbsolutePath(file) {
  for (let dir of [STATIC_ROOT, path.join(PKG_ROOT, "__tests__"), PKG_ROOT]) {
    let variant = path.resolve(dir, file);
    if (fs.existsSync(variant)) return variant;
  }
  throw new Error("File not found");
}

/**
 *
 * @param {http.ServerResponse<http.IncomingMessage>} response
 */
function sendNotFoundResponse(response) {
  response.writeHead(404, { "Content-Type": "text/html" });
  fs.readFile(path.join(STATIC_ROOT, "404.html"), function (_, content) {
    response.end(content, "utf-8");
  });
}

/**
 *
 * @param {http.ServerResponse<http.IncomingMessage>} response
 * @param {NodeJS.ErrnoException} error
 */
function sendServerError(response, error) {
  response.writeHead(500);
  response.end("ERROR: " + JSON.stringify(error, null, "\t") + " ..\n");
}
