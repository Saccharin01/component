let container = ["/", "/index.html"];
const fs = require("fs");

// let something = container[container.indexOf(`/`)]
let something = "/";
// ? somethind === req.url
let logicCheck = container[container.indexOf(something)];

console.log(logicCheck);

if (something === container[container.indexOf(something)]) {
  fs.readFile(`${logicCheck}`, "utf-8", (err, data) => {
    if (err) {
      console.error(`this Error Occur : ${err}`);
    } else {
      res.writeHead(200, { "content-Type": "" });
      res.end(data);
    }
  });
  console.log("tracking this part");
  // res.end();
}
