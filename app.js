console.log("app test");

const program = require("commander");
const package = require("./package.json");

console.log("hello activity")

program.
    version(package.version)
    .command("init","init test.");


program.parse(process.argv);
