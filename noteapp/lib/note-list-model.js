function NoteList(){
  this._notes = [];
};

NoteList.prototype.addNote = function (note) {
  this._notes.push(note);
};

NoteList.prototype.showNotes = function () {
  return this._notes;
};
