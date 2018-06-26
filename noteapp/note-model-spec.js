(function(exports){
  var expect = function(actual, expected){
  // evaluates to something that .toEqual method can be invoked on
  // if(!(actual === expected)) {
  //   throw new Error(actual + " does not equal " + expected)
  // }
  assert.isTrue(actual === expected);
}
  exports.expect = expect
})(this);


(function(exports){
  var noteStoresTextTest = function(){
    var note = new Note("This text should be stored");
    return expect(note.showText(), "This text should be stored")
  }
  noteStoresTextTest();

})(this);
