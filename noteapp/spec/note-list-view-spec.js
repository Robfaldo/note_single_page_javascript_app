 (function(exports){
  var returnsOneNoteHTMLStringTest = function(){
    var noteList = new NoteList();
    var note = new Note("Text of a note");
    noteList.addNote(note)
    var noteListView = new NoteListView(noteList);

    stringReturned = noteListView.htmlString()

    return assert.isTrue(stringReturned === '<ul><li><div><a href="#5">Text of a note</a></div></li></ul>')
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
    return assert.isTrue(stringReturned === '<ul><li><div><a href="#6">Text of a note</a></div></li><li><div><a href="#7">Text of a second not</a></div></li></ul>')
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
    return assert.isTrue(stringReturned === '<ul><li><div><a href="#8">This is twenty chars</a></div></li></ul>')
  }
  exports.onlyReturns20CharsTest = onlyReturns20CharsTest;
  onlyReturns20CharsTest();
})(this);


 (function(exports){
   function noteUpdatesToCorrectUrlTest(){
     var noteList = new NoteList();
     var note = new Note('This is a note');
     noteList.addNote(note)
     var noteListView = new NoteListView(noteList);

     stringReturned = noteListView.htmlString();

     assert.isTrue(stringReturned === `<ul><li><div><a href="#${note.showId()}">This is a note</a></div></li></ul>`)
   };

   exports.noteUpdatesToCorrectUrlTest = noteUpdatesToCorrectUrlTest;
   noteUpdatesToCorrectUrlTest();
 })(this);
