const chalk = require("chalk");

console.log(chalk.red("Hello", chalk.underline("world") + "!"));
console.log(chalk.underline.rgb(123, 45, 67)("Underlined reddish color"));
console.log(chalk.underline.rgb(3, 145, 2)("Underlined greenish color"));
