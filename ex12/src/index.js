function switchCaseSequential(num) {
  // Only change code below this line
  var answer = num;
  switch (answer) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  // Only change code above this line
  return answer;
}
console.log(switchCaseSequential(9)); // Change this line
module.exports = switchCaseSequential;
