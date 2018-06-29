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
