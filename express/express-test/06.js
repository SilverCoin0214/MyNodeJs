const { json } = require("express");
const express = require("express");

const app = express();

// 自己解析 json
app.use((req, res, next) => {
  if (req.headers["content-type"] === "application/json") {
    req.on("data", (data) => {
      req.body = JSON.parse(data);
    });

    req.on("end", () => {
      next();
    });
  } else {
    next();
  }
});

// node 内置 函数
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("post 进入 login");
});

app.post("/home", (req, res, next) => {
  console.log(req.body);
  res.end("post 进入 home");
});

app.listen(3000, () => {
  console.log("普通中间件监听端口3000!");
});
