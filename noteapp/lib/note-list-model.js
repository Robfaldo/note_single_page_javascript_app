
(function(exports){
  function NoteList(){
    this._notes = [];
  };
  exports.NoteList = NoteList;
})(this);

NoteList.prototype.addNote = function (note) {
  this._notes.push(note);
};

NoteList.prototype.showNotes = function () {
  return this._notes;
};
