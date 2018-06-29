// Using TDD, update your note-controller.js to load content for the single note page.
// The note controller code should listen for hashchange events. When one happens, if
// the new browser URL is for a single note page, it should change the content of the app
// element to be the HTML for that note.
//
//  Go to http://localhost:8080 in your browser. You should be able to click on a note and see the full text of that note. There should be no page refresh.


(function(exports){
  function aNoteControllerCanBeInstantiatedTest(){
    this.noteList = new NoteList();
    this.noteController = new NoteController(this.noteList);

    return assert.isTrue(this.noteController instanceof this.NoteController)
  }
  exports.aNoteControllerCanBeInstantiatedTest = aNoteControllerCanBeInstantiatedTest;
  aNoteControllerCanBeInstantiatedTest();
})(this);

(function(exports){
  function noteControllerChangesHTMLTest(){

    function NoteListMock() {
      this.addNoteCallCount = 0;
    };

    NoteListMock.prototype= {
      addNote: function(note){
        this.addNoteCallCount ++;
      }
    };

    this.noteListMock = new NoteListMock();

    function NoteListViewMock(noteListMock) {
      this.htmlString = function(noteListMock) {
        return "<ul><li><div><a href='#1'>Favourite food: pesto</a></div></li></ul>"
      }
    }

    this.noteListViewMock = new NoteListViewMock(this.noteListMock)
    this.noteController = new NoteController(this.noteListMock, noteListViewMock);

    noteController.insertIntoHtml();

    this.appInnerHtml = document.getElementById('app').innerHTML
    assert.isTrue(this.appInnerHtml=== `<ul><li><div><a href="#1">Favourite food: pesto</a></div></li></ul>`)
    // assert.isTrue(noteListMock.addNoteCallCount == 1);
  }
  exports.noteControllerChangesHTMLTest = noteControllerChangesHTMLTest;
  noteControllerChangesHTMLTest();
})(this);


// Using TDD, update your note-controller.js to load content for the single note page.
// The note controller code should listen for hashchange events. When one happens, if
// the new browser URL is for a single note page, it should change the content of the app
// element to be the HTML for that note.


(function(exports){
  function changesContentToNoteWhenClickedTest(){

    this.noteList = new NoteList();
    this.note = new Note("Testing this note that has more than 20 chars");
    this.noteList.addNote(note);
    this.noteController = new NoteController(this.noteList);
    noteController.insertIntoHtml();

    document.getElementById('app').click()

    appContent = document.getElementById('app').innerHTML;
    assert.isTrue(appContent === '<ul><li><div><a href="#4">Testing this note that has more than 20 chars</a></div></li></ul>')
  }

  exports.changesContentToNoteWhenClickedTest = changesContentToNoteWhenClickedTest;
  changesContentToNoteWhenClickedTest();
})(this);
