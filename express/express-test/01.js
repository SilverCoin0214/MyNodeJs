const express = require("express");

const app = express();

// 监听路径
app.get("/", (req, res, next) => {
  res.end("hello express");
});

app.post("/login", (req, res, next) => {
  res.end("use post");
});

// 开启监听
app.listen(8000, () => {
  console.log("express 开启");
});
