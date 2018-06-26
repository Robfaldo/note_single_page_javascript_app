
(function(exports){
  function Note(text){
    this._text = text
  };

  exports.Note = Note;
})(this);

Note.prototype.showText = function() {
  return this._text
}
