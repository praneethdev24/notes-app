const fs = require("fs");
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes....";
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  /*const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });*/

  const duplicateNotes = notes.filter((note)=>note.title === title)

  if(duplicateNotes.length ===0) {
    
    notes.push({
        title: title,
        body: body,
      });
      saveNotes(notes);
    console.log('New note added');
  } 
 else {

    console.log("Note Title Taken");
 }

 
};

const removeNote = (title) =>{
  const notes = loadNotes();

  /*const notesToKeep = notes.filter(function(note){
      return note.title !== title
  });
  */
  const notesToKeep = notes.filter(note => note.title !== title)

  if(notes.length > notesToKeep.length) {
  
           console.log(chalk.green.inverse('Note removed'))
           saveNotes(notesToKeep)
  }
    else {

        console.log(chalk.red.inverse("No Note Removed"))
    }
  
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes=() => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote:removeNote
};
