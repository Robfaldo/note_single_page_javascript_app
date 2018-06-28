// Takes a note list model upon instantiation.
  // Has a method that, when called, returns a string
  //of HTML that represents the note list model. For
  //example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.

// Handles a note list model that has no notes, one note or several notes


(function(exports){
  var returnsOneNoteHTMLStringTest = function(){
    var noteList = new NoteList();
    noteList.addNote("Text of a note")
    var noteListView = new NoteListView(noteList);

    stringReturned = noteListView.htmlString()

    return assert.isTrue(stringReturned === "<ul><li><div>Text of a note</div></li></ul>")
  }
  returnsOneNoteHTMLStringTest();
  exports.returnsOneNoteHTMLStringTest = returnsOneNoteHTMLStringTest;
})(this);

(function(exports){
  var returnsMultipleHtmlStringTest = function(){
    var noteList = new NoteList();
    noteList.addNote("Text of a note")
    noteList.addNote("Text of a second note")
    var noteListView = new NoteListView(noteList);

    stringReturned = noteListView.htmlString()
    return assert.isTrue(stringReturned === "<ul><li><div>Text of a note</div></li><li><div>Text of a second note</div></li></ul>")
  }
  returnsMultipleHtmlStringTest();
  exports.returnsMultipleHtmlStringTest = returnsMultipleHtmlStringTest;
})(this);
