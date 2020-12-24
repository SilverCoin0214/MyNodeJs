/***
 * 执行终端相关命令
 */

const { spawn } = require("child_process");
const { resolve } = require("path");

const commandSpawn = (...args) => {
  return new Promise((resolve) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve();
    });
  });
};

module.exports = {
  commandSpawn,
};
