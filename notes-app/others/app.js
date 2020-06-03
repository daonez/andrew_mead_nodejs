// const name = require("./utils.js");
// console.log(name);
// const validator = require("validator");
// const getNotes = require("./notes");

// const msg = getNotes();
// console.log(msg);

// const checkEmail = validator.isEmail("cyongchoigmail.com");
// const isURL = validator.isURL("https://github.com/");
// console.log(isURL);

// const chalk = require("chalk");

// const chalkTest = `Success:${chalk.bold.green("Success")} Error:${chalk.bgWhite.bold.red(
//   "ERROR"
// )} Inverse:${chalk.inverse.yellow("Inverse")}`;

// console.log(chalkTest);

// console.log(process.argv[2]);

// const chalk = require("chalk");

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing notes");
// }

// console.log(process.argv);
// const yargs = require("yargs");
// const notes = require("./notes");

// // //* create adds command

// yargs.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "Note body",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     notes.addNotes(argv.title, argv.body);
//     //console.log("Title:" + argv.title), console.log("Body:" + argv.body);
//   },
// });

// //* remove command
// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   builder: {
//     title: {
//       describe: "Note title",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: function (argv) {
//     notes.removeNote(argv.title);
//   },
// });

// //* lists
// yargs.command({
//   command: "lists",
//   describe: "these are the lists",
//   handler: function () {
//     console.log("these are the lists");
//   },
// });

// //* read
// yargs.command({
//   command: "read",
//   describe: "reads the file",
//   handler: function () {
//     console.log("reads the file");
//   },
// });

// yargs.parse();
