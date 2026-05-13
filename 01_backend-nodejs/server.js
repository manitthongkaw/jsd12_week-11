const http = require("http");

const port = 3030;

const menu = [
    { id:1, name:"ข้าวผัด", price:50, },
    { id:2, name:"ผัดกระเพรา", price:60, },
    { id:3, name:"ส้มตำ", price:40, },
    { id:4, name:"เสต็ก", price:120, },
    { id:5, name:"ตำหลวงพระบางแซลมอน", price:320, },
    { id:6, name:"โอโทโร่", price:500, },
    { id:7, name:"แกงกะหรี่หมูทอด", price:80, },
  ];

const server = http.createServer((req, res) => {
  //console.log(`${req.url} ${req.method} ${req.headers}`);
  console.log(req.url, req.method, req.headers);
  if (req.method === "GET") {
    /*
    res.setHeader("Content-Type", "text/html");
    res.write("Hello world");
    res.end();
    */
   if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("สวัสดีครับ User");
   }
   if (req.url === "/menus") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(menu));
   }
   if (req.url === "/randommenu") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    const randomNumber = Math.floor(Math.random() * menu.length);
    res.end(JSON.stringify(menu[randomNumber]));
   }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});