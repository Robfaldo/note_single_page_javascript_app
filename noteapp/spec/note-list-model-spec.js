(function(exports){
  var addNoteTest = function(){
    var noteList = new NoteList();
    noteList.addNote("text of note")

    return assert.isIncluded("text of note", noteList.showNotes());
  }

  addNoteTest();
  exports.addNoteTest = addNoteTest;
})(this);
