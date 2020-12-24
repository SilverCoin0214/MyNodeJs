const http = require("http");

// 1.创建一个web服务器
const server = http.createServer((req, res) => {
  console.log("gegnxin");
  res.end("hello ");
});

server.listen(8000, "0.0.0.0", () => {
  console.log("服务器已经打开");
});

// 2. 创建 web 服务器另一种方式

const server2 = new http.Server((req, res) => {
  res.end("server2");
});

server2.listen(8001, () => {
  console.log("服务器第二种方式打开");
});
