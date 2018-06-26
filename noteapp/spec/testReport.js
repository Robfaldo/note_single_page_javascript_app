(function(exports){
  var testReport = function(test, testName){
    if(!test) {
      console.log(testName + " failed");
    } else {
      console.log(testName + " passed");
    }
  }

  testReport(noteStoresTextTest(), this.noteStoresTextTest.name);
})(this);
