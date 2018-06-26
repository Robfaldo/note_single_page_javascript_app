function Note(text){
  this._text = text
};

Note.prototype.showText = function() {
  return this._text
}
