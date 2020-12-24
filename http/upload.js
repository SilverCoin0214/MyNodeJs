const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);

  if (pathname == "/upload") {
    if (req.method == "POST") {
      // 图片格式必须设置为 binary
      req.setEncoding("binary");

      let body = "";
      const totalBoundary = req.headers["content-type"].split(";")[1];
      const boundary = totalBoundary.split("=")[1];

      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        // console.log(body);
        // 处理body

        // 1. 获取 image 的位置
        const payload = qs.parse(body, "\r\n", ": ");
        const type = payload["Content-Type"];

        // 2. 在 image 出进行截取
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;

        let imageData = body.substring(typeIndex + typeLength);

        // 3. 将中间的两个空格去掉
        imageData = imageData.replace(/^\s\s*/, "");

        // 4. 将最后的 boundary去掉
        imageData = imageData.substring(
          0,
          imageData.indexOf(`--${boundary}--`)
        );

        fs.writeFile("./foo.jpeg", imageData, "binary", (err) => {
          res.end("文件上传成功");
        });
      });
    }
  }
});

server.listen(8001, () => {
  console.log("服务器开启成功");
});
