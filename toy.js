
let toy = (reqUrl, Dirname,res)=>{
  
  if (`${reqUrl}`.split(".")[1] === `${Dirname}`) {
    const fs = require("fs");
    fs.readdir(`${Dirname}`, (err, data) => {
      if (err) {
      } else {
        fs.readFile(`${Dirname}/${data[data.indexOf(`${reqUrl}`.split("/")[1])]}`,"utf-8",(err, data) => {
            if (err) {
              res.writeHead(500, { "content-Type": "text/plain" });
              res.write(`<h1>Server Error</h1>`);
              res.end();
              console.error(err);
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
  }
}

module.exports = toy
