#!/usr/bin/env node
const program = require("commander");

const helpOption = require("./lib/core/help.js");
const createCommands = require("./lib/core/create");

// 查看版本信息
program.version(require("./package.json").version);

// 帮助指令
helpOption();

// 创建指令
createCommands();

program.parse(process.argv);
