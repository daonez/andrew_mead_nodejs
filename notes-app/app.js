const yargs = require("yargs");
const notes = require("./notes");

//* change to ES6

// //* create adds command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
    //console.log("Title:" + argv.title), console.log("Body:" + argv.body);
  },
});

//* remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//* lists
yargs.command({
  command: "lists",
  describe: "these are the lists",
  handler() {
    notes.listNotes();
  },
});

//* read
yargs.command({
  command: "read",
  describe: "reads the file",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
