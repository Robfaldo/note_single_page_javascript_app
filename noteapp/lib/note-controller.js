// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.

// The note controller has a method that gets HTML from
// the note list view and inserts it into the app element.

(function(exports){
  function NoteController(noteList, noteListView = "default"){
    this.noteList = noteList;
    this.noteList.addNote("Favourite food: pesto")
    this.noteListView = noteListView === "default" ? new NoteListView(noteList) : noteListView;
  }

  NoteController.prototype.insertIntoHtml = function(){
    var htmlString = this.noteListView.htmlString();
    document.getElementById('app').innerHTML = htmlString;
  }

  exports.NoteController = NoteController;
})(this);
