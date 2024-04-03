#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreen.bold.italic.red("WELCOME MY CALCULATOR PROJECT"));
console.log(chalk.white.bold("___________________________________________________________"));
console.log();
let answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Select one of the operators to perform operation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division", "Reminder", "Square Root", "Factorial"] }
]);
if (answer.operator === "Addition") { // Addition Operands
    let secondNumber = await inquirer.prompt({ message: "Enter Second Number", type: "number", name: "secondNumber" });
    console.log(chalk.bgYellow.black.bold.italic("Result: ", answer.firstNumber + secondNumber.secondNumber));
}
else if (answer.operator === "Subtraction") { // Subtraction Operands
    let secondNumber = await inquirer.prompt({ message: "Enter Second Number", type: "number", name: "secondNumber" });
    console.log(chalk.bgYellow.black.bold.italic("Result: ", answer.firstNumber - secondNumber.secondNumber));
}
else if ((answer.operator === "Multiplication")) { // Multipication Operands
    let secondNumber = await inquirer.prompt({ message: "Enter Second Number", type: "number", name: "secondNumber" });
    console.log(chalk.bgYellow.black.bold.italic("Result: ", answer.firstNumber * secondNumber.secondNumber));
}
else if (answer.operator === "Division") { // Divsion Operands
    let secondNumber = await inquirer.prompt({ message: "Enter Second Number", type: "number", name: "secondNumber" });
    console.log(chalk.bgYellow.black.bold.italic("Result: ", answer.firstNumber / secondNumber.secondNumber));
}
else if (answer.operator === "Reminder") { //Reminder Operands
    let secondNumber = await inquirer.prompt({ message: "Enter Second Number", type: "number", name: "secondNumber" });
    console.log(chalk.bgYellow.black.bold.italic("Result: ", answer.firstNumber % secondNumber.secondNumber));
}
else if (answer.operator === "Square Root") { // Squrae Root Operands
    console.log(chalk.bgYellow.black.bold.italic("Result: ", Math.sqrt(answer.firstNumber)));
}
else if (answer.operator === "Factorial") { // Factorial Operands
    let factorial = 1;
    for (let i = 2; i <= answer.firstNumber; i++) {
        factorial *= i;
    }
    console.log(chalk.bgYellow.black.bold.italic("Result: ", factorial));
}
else {
    console.log(chalk.bgYellow.black("Pleased! Select valid Operator."));
}
