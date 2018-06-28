// Code is in a file called single-note-view.js.

// Code is wrapped in the module pattern.

// Code uses the constructor and prototype pattern to define
// a single note view object that can be instantiated.
// The single note view constructor takes a note model
// as a parameter.

// The single note view has a method that, when called,
// returns a string of HTML that represents the note model.
// For example: <div>Favourite drink: seltzer</div>.

(function(exports){
  function singleNoteViewReturnsHtmlTest() {
    // setup
    var noteModel = new Note("Favourite drink: seltzer")
    var singleNoteView = new SingleNoteView(noteModel)
    // exercise
    htmlString = singleNoteView.htmlString()
    // verify
    assert.isTrue(htmlString === "<div>Favourite drink: seltzer</div>")
  }
  exports.singleNoteViewReturnsHtmlTest = singleNoteViewReturnsHtmlTest;
  singleNoteViewReturnsHtmlTest();
})(this);
