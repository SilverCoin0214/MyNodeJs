const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // 设置状态码
  // res.statusCode = 401;
  res.writeHead(200, {
    "Content-Type": "text/plain;charset=utf8",
  });

  // 设置响应header
  // res.setHeader();

  // 响应结果
  res.write("返回响应");
  res.end();
});

server.listen(8000, "0.0.0.0", () => {
  console.log("服务器已经打开");
});
