const express = require("express");

const app = express();

// 路径中间件

app.use((req, res, next) => {
  console.log("调用01中间件");
  next();
});

app.use("/login", (req, res, next) => {
  console.log("进入 login 页面");
  next();
});

app.use((req, res, next) => {
  console.log("调用02中间件");
  res.end("middleware end");
});

app.listen(3000, () => {
  console.log("普通中间件监听端口3000!");
});
