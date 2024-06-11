const http = require("http");
const fs = require("fs");
// console.log(http);

let container = [];
let server = http.createServer((req, res) => {
  if (req.url.startsWith("/")) {
    container.push(req.url.split(`/`)[1]);
  }
  if (container.includes(req.url.split("/")[1])) {
    console.log(container);
  }
  console.log(req.method, req.url);

  if (req.method === "GET" && req.url === "/") {
    fs.readFile("work3.html", "utf-8", (err, data) => {
      if (data) {
        res.writeHead(200, { "content-Type": "text/html" });
        res.write(data);
        res.end();
      } else {
        console.error(`this error has been occur : ${err}`);
      }
    });
  }
  if (req.url === "/index.js") {
    fs.readFile("index.js", (err, data) => {
      if (err) {
        console.error(`this error has been occur : ${err}`);
      } else {
        res.writeHead(200, { "content-Type": "Application/javaScript" });
        res.write(data);
        res.end();
      }
    });
  }
});
let PORT = 8080;
server.listen(`${PORT}`);
console.log(`server running on: http://localhost:${PORT}`);
