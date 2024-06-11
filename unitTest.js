let container = ["/", "/work3.html"];
let something = "/work3.html";
// ? somethind === req.url
let htmlTemplate = require("../module/module.HTMLtemplate");
let logicCheck = container[container.indexOf(something)];
console.log(logicCheck);

if (something === "/") {
  console.log("res.writeHead(200. {content-Type})");
  console.log(`res.write(${htmlTemplate})`);
  console.log("res.end()");
}

console.log(logicCheck.split("/")[0]);

if (something === container[container.indexOf(something)]) {
  const fs = require("fs");
  fs.readFile(`${logicCheck.split("/")[1]}`, "utf-8", (err, data) => {
    if (err) {
      console.error(`this Error Occur : ${err}`);
    } else {
      console.log('res.writeHead(200, { "content-Type": "" })');
      console.log("res.end(data)");
      console.log(data);
    }
  });
  // res.end();
}

if (something === "/") {
}
