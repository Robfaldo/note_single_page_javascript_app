// var exclaim = require("./exclaim").exclaim;
var exclaim = require("./exclaim").exclaim;


if (exclaim("hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log(".");
}
