(function(exports){
  function SingleNoteView(noteModel){
    this.noteModel = noteModel;
  };

  SingleNoteView.prototype.htmlString = function(){
    return `<div>${this.noteModel.showText()}</div>`
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
