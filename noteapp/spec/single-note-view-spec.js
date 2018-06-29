(function(exports){
  function singleNoteViewReturnsHtmlTest() {

    var noteModel = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(noteModel)

    htmlString = singleNoteView.htmlString()

    assert.isTrue(htmlString === "<div>Favourite drink: seltzer</div>")
  }
  exports.singleNoteViewReturnsHtmlTest = singleNoteViewReturnsHtmlTest;
  singleNoteViewReturnsHtmlTest();
})(this);
