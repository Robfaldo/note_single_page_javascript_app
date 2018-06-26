// Has a method that will return all the note models
// stored in the array.

// Has a method that creates and stores a
// new single note model. This function takes as an
// argument a string that will be the value of the
// text property of the note e.g. "Favourite drink: seltzer".

(function(exports){
  var addNoteTest = function(){
    var noteList = new NoteList();
    var note = new Note("This is the first note text");
    noteList.addNote(note)

    assert.isTrue(noteList.showNotes() === [note])
  }

  addNoteTest();
})(this);