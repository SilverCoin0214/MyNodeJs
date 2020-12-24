const program = require("commander");

const {
  createProjectAction,
  addCpnAction,
  addPageAction,
} = require("./action");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone repository into a folder")
    .action(createProjectAction);

  program
    .command("addcpn <name>")
    .description("add vuecomponent, lg: sce addcpn test -d src/components")
    .action((name) => {
      addCpnAction(name, program.dest || "src/components");
    });

  program
    .command("addpage <page>")
    .description("add pages")
    .action((page) => {
      addPageAction(page, program.dest || "src/pages");
    });
};

module.exports = createCommands;
