const chalk = require("chalk");

console.log(chalk.red("Hello", chalk.underline("world") + "!"));
console.log(chalk.underline.rgb(123, 45, 67)("Underlined reddish color"));
