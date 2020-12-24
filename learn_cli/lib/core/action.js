const { promisify } = require("util");

const download = promisify(require("download-git-repo"));
const open = require("open");
const path = require("path");

const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/terminal");
const { compile, writeToFile, createDirSync } = require("..//utils/utils");

// 创建项目的action
const createProjectAction = async (project) => {
  console.log("耐心等待下载...");
  // 1. clone项目
  await download(vueRepo, project, { clone: true });

  // 2. 执行 npm install
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` });

  // 3. 运行 npm run serve
  await commandSpawn(command, ["run", "serve"], { cwd: `./${project}` });

  // 4. 打开浏览器
  // open("http://localhost:8080");
};

// 添加组件的action
const addCpnAction = async (name, dest) => {
  // 1. 有对应的ejs模块
  // 2. 编译ejs模板 Result
  const result = await compile("vue-component.ejs", {
    name,
    lowerName: name.toLowerCase(),
  });
  // console.log(result);

  // 3. 将 result 写入到 .vue 文件中
  const targetPath = path.resolve(dest, `${name}.vue`);
  // console.log(targetPath);
  writeToFile(targetPath, result);

  // 4. 放到对应的文件夹中
};

const addPageAction = async (page, dest) => {
  const data = { page, lowerName: page.toLowerCase() };
  const pageResult = await compile("vue-component.ejs", data);
  const routeResult = await compile("vue-router.ejs", data);

  const targetDest = path.resolve(dest, page.toLowerCase());
  if (createDirSync(targetDest)) {
    const targetPagePath = path.resolve(targetDest, `${page}.vue`);
    const targetRouterPath = path.resolve(targetDest, "router.js");

    writeToFile(targetPagePath, pageResult);
    writeToFile(targetRouterPath, routeResult);
  }
};

module.exports = {
  createProjectAction,
  addCpnAction,
  addPageAction,
};
