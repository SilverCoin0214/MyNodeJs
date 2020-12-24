const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // request.url 相关内容, 通过导入 url 和 qs 模块 解析 url
  const { pathname, query } = url.parse(req.url);
  console.log(pathname, query);

  const { name, age } = qs.parse(query);
  console.log(name, age);

  if (pathname == "/user") {
    res.end("perfect");
  }

  // request.method 相关内容
  if (pathname === "/login") {
    if (req.method == "POST") {
      req.setEncoding("utf-8");
      req.on("data", (data) => {
        // console.log(data);
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      });

      res.end("good");
    }
  }

  // request.headers 相关内容
  console.log(req.headers);

  // res.end("hello Server");
});

server.listen(8000, "0.0.0.0", () => {
  console.log("服务器已经打开");
});
