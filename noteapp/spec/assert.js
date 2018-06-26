var assert = {
  isTrue: function(assertionToCheck){
      if(!assertionToCheck){
        throw new Error("Assertion failed " + assertionToCheck + " is not truthy")
      } else {
        return true;
      }
    },
  isIncluded: function(thing, insideThing) {
    if(!insideThing.includes(thing)){
        throw new Error("Assertion failed " + thing + " is not included" + insideThing)
      } else {
        return true;
      }
    }
}
