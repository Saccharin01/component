const fs = require("fs");

// let toy = (reqUrl, Dirname,res)=>{
  
//   if (`${reqUrl}`.split(".")[1] === `${Dirname}`) {
//     fs.readdir(`${Dirname}`, (err, data) => {
//       if (err) {
//         res.writeHead(500, { "content-Type": "text/plain" });
//         res.end();
//         console.error(err);
//         return;
//       } else {
//         fs.readFile(`${Dirname}/${data[data.indexOf(`${reqUrl}`.split("/")[1])]}`,"utf-8",(err, data) => {
//             if (err) {
//               res.writeHead(500, { "content-Type": "text/plain" });
//               res.end();
//               console.error(err);
//               return;
//             } else {
//               res.writeHead(200, {
//                 "content-Type": "Application/javaScript",
//               });
//               res.write(data);
//               res.end();
//             }
//           }
//         );
//       }
//     });
//   }
// }


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
          res.end();
          return;

        } catch (err) {

          res.writeHead(500, { "content-Type": "text/plain" });
          res.end();
          console.error(err);
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




module.exports = toy3
