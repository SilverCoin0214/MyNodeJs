const express = require("express");

const app = express();

// 连续注册中间件

app.use((req, res, next) => {
  console.log("这是普通中间件01");
  next();
});

app.get(
  "/login",
  (req, res, next) => {
    console.log("get请求进入 login 页面 调用中间件01");
    next();
  },
  (req, res, next) => {
    console.log("get请求进入 login 页面 调用中间件02");
    next();
  },
  (req, res, next) => {
    console.log("get请求进入 login 页面 调用中间件03");
    next();
  },
  (req, res, next) => {
    console.log("get请求进入 login 页面 调用中间件03");
    res.end("loing page");
  }
);

app.listen(3000, () => {
  console.log("普通中间件监听端口3000!");
});
