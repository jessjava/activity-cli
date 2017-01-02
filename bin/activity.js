let program = require("commander");
let package = require("./package.json");

console.log("hello activity")

program.
	version(package.version)
	.command("inittest","init test.");


program.parse(process.argv);
