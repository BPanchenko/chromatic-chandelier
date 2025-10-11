const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const {
  HOST,
  MIME,
  baseURL,
  DIR_STATIC,
} = require("../../.config/web-server.cjs");

http
  .createServer(function (request, response) {
    let file = request.url === "/" ? "./index.html" : "." + request.url;
    let file_ext = String(path.extname(file)).toLowerCase();
    let file_path = path.resolve(process.cwd(), file);

    fs.readFile(file_path, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") sendNotFoundResponse(response);
        else sendServerError(response, error);
      } else {
        let contentType = MIME[file_ext] || MIME.default;
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(parseInt(HOST.port), HOST.hostname, 511, () => {
    console.log("Server running at " + baseURL);
  });

/**
 *
 * @param {http.ServerResponse<http.IncomingMessage>} response
 */
function sendNotFoundResponse(response) {
  response.writeHead(404, { "Content-Type": "text/html" });
  fs.readFile(path.resolve(DIR_STATIC, "404.html"), function (_error, content) {
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
