const http = require("http");
const fs = require("fs");
const htmlTemplate = require("./module.HTMLtemplate.js");

let container = [];
let server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (container.includes(req.url)) {
      console.log(container.indexOf(req.rul));
      console.log("tracking");
    } else {
      container.push(req.url);
      console.log(container);
    }
    if (req.url === container[container.indexOf(req.url)]) {
      fs.readFile(`${asdf}`, "utf-8", (err, data) => {
        if (err) {
          console.error(`this Error Occur : ${err}`);
        } else {
          res.writeHead(200, { "content-Type": "" });
          res.end();
        }
      });
      console.log("tracking this part");
      res.end();
    }
  }
});
let PORT = 8080;
server.listen(`${PORT}`);
console.log(`server running on: http://localhost:${PORT}`);
