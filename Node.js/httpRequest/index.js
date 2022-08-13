const express = require("express");
const http = require("http");
const app = express();

const PORT = 8000;


const server = http.createServer((req,res) => {
    const items = req.url.split('/');
    // if(req.url === '/friends')
    ///// ----------------- OR ------------/////
    if(items[1] === 'friends')
    {
      // res.writeHead(200, {
      // 'Content-Type' : 'application/json',
      // });
      //////// ---------OR --------/////////

      res.statusCode(200);
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          id: 1,
          name: "Sir Issac Newton",
        })
      );
    } else if(items[1] === 'messages')
{
    res.write()
}

})


server.listen(PORT, (req,res) => {
    console.log(`server is running on ${PORT}`);
})