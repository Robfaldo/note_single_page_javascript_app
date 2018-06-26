// var Circle = require("./circle").Circle;

// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//
//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//     }
//   };
//
//   testCircleRadiusDefaultsTo10();
// })(this);


function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue(circle.radius === 10);
};

testCircleRadiusDefaultsTo10()
