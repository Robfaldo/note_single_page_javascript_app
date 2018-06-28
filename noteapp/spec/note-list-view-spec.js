 (function(exports){
  var returnsOneNoteHTMLStringTest = function(){
    var noteList = new NoteList();
    var note = new Note("Text of a note");
    noteList.addNote(note)
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
    var note1 = new Note("Text of a note")
    var note2 = new Note("Text of a second note")
    noteList.addNote(note1)
    noteList.addNote(note2)
    var noteListView = new NoteListView(noteList);

    stringReturned = noteListView.htmlString()
    return assert.isTrue(stringReturned === "<ul><li><div>Text of a note</div></li><li><div>Text of a second not</div></li></ul>")
  }
  returnsMultipleHtmlStringTest();
  exports.returnsMultipleHtmlStringTest = returnsMultipleHtmlStringTest;
})(this);

(function(exports){
  var onlyReturns20CharsTest = function(){
    var noteList = new NoteList();
    var note  = new Note("This is twenty chars with some extra")
    noteList.addNote(note)
    var noteListView = new NoteListView(noteList);

    stringReturned = noteListView.htmlString()
    return assert.isTrue(stringReturned === "<ul><li><div>This is twenty chars</div></li></ul>")
  }
  exports.onlyReturns20CharsTest = onlyReturns20CharsTest;
  onlyReturns20CharsTest();
})(this);


 // Use TDD to update the note list view so that
 // each note is linked to an appropriate URL for
 // displaying that individual note e.g.
 // http://localhost:8080#notes/1.

 // Go to http://localhost:8080 in your browser.
 // You should be able to click on a note and be
 // redirected to the URL for that note. There should be
 // no page refresh. The page content shouldn't change.
 // (And you won't see the note, yet.)

 // (function(exports){
 //   function noteUpdatesToCorrectUrlTest(){
 //     // Setup
 //     var noteList = new NoteList();
 //     noteList.addNote()
 //     // Exercise
 //     // Verify
 //
 //   };
 //
 //   exports.noteUpdatesToCorrectUrlTest = noteUpdatesToCorrectUrlTest;
 //   noteUpdatesToCorrectUrlTest();
 // })(this);
