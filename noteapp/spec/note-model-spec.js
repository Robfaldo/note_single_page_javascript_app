(function(exports){
  var expect = function(actual, expected){
    return assert.isTrue(actual === expected);
  }
  exports.expect = expect
})(this);

(function(exports){
  var noteStoresTextTest = function(){
    var note = new Note("This text should be stored");
    return expect(note.showText(), "This text should be stored")
  }
  noteStoresTextTest();
  exports.noteStoresTextTest = noteStoresTextTest;
})(this);

// (function(exports){
//   var testReport = function(test, testName){
//     if(!test) {
//       console.log(testName + " failed");
//     } else {
//       console.log(testName + " passed");
//     }
//   }
//
//   testReport(noteStoresTextTest(), this.noteStoresTextTest.name);
// })(this);
