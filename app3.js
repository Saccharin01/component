const http = require("http");
let container = [];
let server = http.createServer((req, res) => {
  container.push(req.url);
  console.log(container);
  if (req.method === "GET") {
    if (container.includes(req.url) && req.url === "/") {
      const htmlTemplate = require("./module.HTMLtemplate");
      res.write(htmlTemplate());
      res.end();
    }
    if (container.includes(req.url)) {
      console.log(req.url);
    }
  }
});

let PORT = 8080;
server.listen(`${PORT}`);
console.log(`server running on : http://localhost:${PORT}/`);
