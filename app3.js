const http = require("http");
let container = [];
let server = http.createServer((req, res) => {
  if (!container.includes(req.url)) {
    container.push(req.url);
  } else {
    console.log(container);
    if (req.method === "GET") {
      if (container.includes(req.url) && req.url === "/") {
        const htmlTemplate = require("./module.HTMLtemplate");
        res.write(htmlTemplate());
        res.end();
      }
      if (container.includes(req.url) && req.url.split(".")[1] === "js") {
        const fs = require("fs");
        fs.readdir(`${req.url.split(".")[1]}`, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            fs.readFile(`${req.url.split(".")[1]}/${data[data.indexOf(req.url.split("/")[1])]})}`,"utf-8",(err, data) => {
                if (err) {
                  res.writeHead(500, { "content-Type": "text/plain" });
                  res.write(`<h1>Server Error</h1>`);
                  res.end();
                  console.log(err);
                } else {
                  res.writeHead(200, {
                    "content-Type": "Application/javaScript",
                  });
                  res.write(data);
                  res.end();
                }
              }
            );
          }
        });
      } else {
      }
    }
  }
});

let PORT = 8080;
server.listen(`${PORT}`);
console.log(`server running on : http://localhost:${PORT}/`);
