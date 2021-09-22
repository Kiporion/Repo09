function switchCase(letter) {
  // Only change code below this line
  var animals = letter;
  switch (animals) {
    case "a":
      return "antelope";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;
  }
  // Only change code above this line
  return animals;
}

console.log(switchCase("d")); // change this line

module.exports = switchCase;
