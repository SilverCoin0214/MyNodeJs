const program = require("commander");

const helpOption = () => {
  program.option("-d --dest <dest>", "a destination folder");
};

module.exports = helpOption;
