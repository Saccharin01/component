const http = require("http");
const fs = require("fs");
// console.log(http);

let container = [];
let server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (!container.includes(req.url)) {
      container.push(req.url);
    } else {
      console.log("tracking");
    }
  }
});
let PORT = 8080;
server.listen(`${PORT}`);
console.log(`server running on: http://localhost:${PORT}`);
