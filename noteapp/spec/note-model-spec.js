(function(exports){
  var noteAssignsUniqueIdTest = function(){
    var note = new Note("should be id 1");
    var note2 = new Note("should be id 2");

    return assert.isTrue(note2.showId() === 1)
  }

  exports.noteAssignsUniqueIdTest = noteAssignsUniqueIdTest;
  noteAssignsUniqueIdTest();
})(this);

(function(exports){
  var noteStoresTextTest = function(){
    var note = new Note("This text should be stored");
    return assert.isTrue(note.showText() === "This text should be stored")
  }
  noteStoresTextTest();
  exports.noteStoresTextTest = noteStoresTextTest;
})(this);




 // TDD giving each note model object a unique id. The first note
 // created would have an id of 0. The second note created would
 // have an id of 1. etc.
