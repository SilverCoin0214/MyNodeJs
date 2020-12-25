const express = require("express");

const app = express();

// 路径和方法中间件

app.use((req, res, next) => {
  console.log("普通中间件");
  res.end("ok");
  next();
});

app.get("/login", (req, res, next) => {
  console.log("get请求进入 Login 页面");
});

app.post("/home", (req, res, next) => {
  console.log("post请求进入 home 页面");
});

app.listen(3000, () => {
  console.log("普通中间件监听端口3000!");
});
