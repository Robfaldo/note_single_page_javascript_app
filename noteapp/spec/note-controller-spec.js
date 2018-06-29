(function(exports){
  function aNoteControllerCanBeInstantiatedTest(){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);

    return assert.isTrue(noteController instanceof NoteController)
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

    var noteListMock = new NoteListMock();

    function NoteListViewMock(noteListMock) {
      this.htmlString = function(noteListMock) {
        return "<ul><li><div><a href='#1'>Favourite food: pesto</a></div></li></ul>"
      }
    }

    var noteListViewMock = new NoteListViewMock(noteListMock)
    var noteController = new NoteController(noteListMock, noteListViewMock);

    noteController.insertIntoHtml();

    appInnerHtml = document.getElementById('app').innerHTML
    assert.isTrue(appInnerHtml=== `<ul><li><div><a href="#1">Favourite food: pesto</a></div></li></ul>`)
    assert.isTrue(noteListMock.addNoteCallCount == 1);
  }
  exports.noteControllerChangesHTMLTest = noteControllerChangesHTMLTest;
  noteControllerChangesHTMLTest();
})(this);
