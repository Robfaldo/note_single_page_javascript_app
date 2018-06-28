

(function(exports){
  var noteCounter = 0;
  function Note(text){
    this.id = noteCounter;
    this._text = text;
    noteCounter++;
  };

  exports.Note = Note;
})(this);

Note.prototype.showText = function() {
  return this._text
}

Note.prototype.showId = function() {
  return this.id;
}
