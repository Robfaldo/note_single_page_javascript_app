(function(exports){
  function NoteListView(noteList) {
    this.noteList = noteList;
  }
  exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.htmlString = function(){
  var htmlStringArray = [];
  var arrayOfNotesText = this.noteList.showNotes();
  arrayOfNotesText.forEach(function(noteText){
    htmlStringArray.push(`<li><div>${noteText}</div></li>`)
  });
  return "<ul>" + htmlStringArray.join("") + "</ul>"
}
