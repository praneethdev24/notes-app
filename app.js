const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes  = require("./notes.js");
const { command, describe, demandOption } = require("yargs");

//Customize yargs version

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder : {
    title: {
      describe:"Note title",
      demandOption:true,
      type:'string'
    },
    body : {
      describe: "Note Body",
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title,argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a new note",
  builder: {
    title: {
       describe:"Note title",
       demandOption:true,
       type:'string'
    }
  },
  handler (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    console.log("Listing out all notes");
  },
});

yargs.command({
  command: "read",
  describe: "reading a new note",
  handler() {
    console.log("Remove the new note ");
  },
});


yargs.parse();