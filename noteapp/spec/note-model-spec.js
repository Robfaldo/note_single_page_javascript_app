(function(exports){
  var noteStoresTextTest = function(){
    var note = new Note("This text should be stored");
    return assert.isTrue(note.showText() === "This text should be stored")
  }
  noteStoresTextTest();
  exports.noteStoresTextTest = noteStoresTextTest;
})(this);
