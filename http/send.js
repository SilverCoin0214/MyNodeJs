const http = require("http");

// http发送get请求
// http.get("http://localhost:8000", (res) => {
//   res.on("data", (data) => {
//     console.log(data.toString());
//   });
// });

// HTTP 发送 post 请求

const req = http.request(
  {
    method: "POST",
    hostname: "localhost",
    port: "8000",
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data.toString());
    });
  }
);

req.end();
