(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5
  
  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };


  // function exclaim(string) {
  //   return string + repeat("!", EXCLAMATION_MARK_COUNT);
  // };

  exports.exclaim = exclaim;
})(this);

var testfunc = function(){
  key: 5
}
