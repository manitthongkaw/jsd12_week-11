const http = require("http");

const port = 3032;

const user = [
    { id:1, genmate:"c", name:"วินเนอร์", },
    { id:2, genmate:"b", name:"ไวไว", },
    { id:3, genmate:"c", name:"แบงค์", },
    { id:4, genmate:"a", name:"อาช่า", },
    { id:5, genmate:"f", name:"เอม", },
    { id:6, genmate:"e", name:"เต้", },
    { id:7, genmate:"b", name:"ชง", },
    { id:8, genmate:"b", name:"มายด์", },
    { id:9, genmate:"f", name:"การ์ด", },
    { id:10, genmate:"c", name:"โจ", },
    { id:11, genmate:"c", name:"แซ่เอี้ยว	อ๋อง", },
    { id:12, genmate:"a", name:"ซัน", },
    { id:13, genmate:"f", name:"หลิน", },
    { id:14, genmate:"b", name:"อาม", },
    { id:15, genmate:"d", name:"โอ้", },
    { id:16, genmate:"b", name:"ตรี", },
    { id:17, genmate:"a", name:"พลอย", },
    { id:18, genmate:"a", name:"ลิน", },
    { id:19, genmate:"f", name:"เจ", },
    { id:21, genmate:"d", name:"แม็ค", },
    { id:22, genmate:"a", name:"ไนท์", },
    { id:23, genmate:"c", name:"เปรม", },
    { id:24, genmate:"d", name:"ปาล์ม", },
    { id:25, genmate:"e", name:"โคะ", },
    { id:27, genmate:"e", name:"บัว", },
    { id:28, genmate:"e", name:"ต้า", },
    { id:29, genmate:"g", name:"บุ๊ค", },
    { id:30, genmate:"e", name:"หยก", },
    { id:32, genmate:"d", name:"กิ๊ฟ", },
    { id:33, genmate:"d", name:"ต่าย", },
    { id:34, genmate:"g", name:"เกท", },
    { id:35, genmate:"g", name:"แก๊ป", },
    { id:36, genmate:"c", name:"ฟง", },
    { id:37, genmate:"a", name:"ปาร์ค", },
    { id:38, genmate:"f", name:"ตูน", },
    { id:39, genmate:"g", name:"ภูมิ", },
    { id:40, genmate:"g", name:"เต", },
    { id:41, genmate:"f", name:"ทราย", },
    { id:42, genmate:"f", name:"อ๋อง", },
    { id:43, genmate:"d", name:"แวว", },
    { id:44, genmate:"b", name:"อ๊อด", },
  ];

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.method === "GET") {
   if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Welcome to JSD12");
   }
   if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
   }
   if (req.url.startsWith("/users/")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    const number = parseInt(req.url.split("/")[2]);
    res.end(JSON.stringify(user.find(person => person.id === number)));
   }
   if (req.url === "/randomuser") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    const randomNumber = Math.floor(Math.random() * user.length);
    res.end(JSON.stringify(user[randomNumber]));
   }
   if (req.url.startsWith("/genmate/")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    const text = req.url.split("/")[2];
    res.end(JSON.stringify(user.filter(group => group.genmate === text)));
   }
   if (req.url === "/randomgenmate") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    const genmates = [...new Set(user.map(u => u.genmate))];
    const randomGenmate = genmates[Math.floor(Math.random() * genmates.length)];
    res.end(JSON.stringify(user.filter(u => u.genmate === randomGenmate)));
   }
  }
});

server.listen(port, () => {
  console.log(`server is running port ${port}`);
});

module.exports = { user };