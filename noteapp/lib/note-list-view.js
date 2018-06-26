(function(exports){
  function NoteListView(noteList) {
    this.noteList = noteList;
  }
  exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.htmlString = function(){
  return `<ul><li><div>${this.noteList.showNotes()}</div></li></ul>`
}
