const http = require("http");
const htmlTemplate = require("./js/module.HTMLtemplate");
const toy3 = require('./toy2.js')
const fs = require('fs')
let container = [];


let server = http.createServer((req, res) => {

  if (!container.includes(req.url)) {
    container.push(req.url);
  }
    console.log(container);
    if (req.method === "GET") {
      console.log(req.url)
      // if (container.includes(req.url) && req.url === "/") {
      if (req.url === "/") {
        res.writeHead(200, {"content-Type": "text/html"});
        res.end(htmlTemplate());
      }
        let toy3 = (reqUrl, res, Dirname,  contentType, callback)=>{
          fs.readdir(`${Dirname}`, (err, data) => {
            if (err) {
              res.writeHead(500, { "content-Type": "text/plain" });
              res.end();
              console.error(err);
              return;
            } else {
              fs.readFile(`${Dirname}/${data[data.indexOf(`${reqUrl}`.split("/")[1])]}`,"utf-8",(err, data) => {
                try {
        
                  res.writeHead(200, {"content-Type": `${contentType}`});
                  res.write(data);
                  // res.end();
                  // return;
        
                } catch (err) {
                  if(err){
                    console.error(err);
                    res.writeHead(500, { "content-Type": "text/plain" });
                    // res.end();
                    // return;

                  }
        
        
                } finally{
                  res.end();
                  return;
                }
        
        
        
        
        
        
        
        
        
        
        
                  if (err) {
                    
                  } else {
                   
                  }
                }
              );
            }
          });
        }
      
      



        toy3(req.url, res, 'js', 'Application/javaScript')

      // if (container.includes(req.url) && req.url.split(".")[1] === "js") {
      // if (req.url.split(".")[1] === "js") {
      //   const fs = require("fs");
      //   fs.readdir(`${req.url.split(".")[1]}`, (err, data) => {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       console.log(data);
      //       fs.readFile(`${req.url.split(".")[1]}/${data[data.indexOf(req.url.split("/")[1])]}`,"utf-8",(err, data) => {
      //           if (err) {
      //             res.writeHead(500, { "content-Type": "text/plain" });
      //             res.write(`<h1>Server Error</h1>`);
      //             res.end();
      //             console.error(err);
      //           } else {
      //             res.writeHead(200, {
      //               "content-Type": "Application/javaScript",
      //             });
      //             res.write(data);
      //             res.end();
      //           }
      //         }
      //       );
      //     }
      //   });
      // } else {
      // }
    }
  
});

let PORT = 8080;
server.listen(`${PORT}`);
console.log(`server running on : http://localhost:${PORT}/`);
