// Only Change code below this line
function myDoWhile() {
  var myNumbers = "";
  var i = 0;
  do {
    myNumbers += i + ",";
    i++;
    if (i == 9) {
      return (myNumbers += "9");
    }
  } while (i <= 9);
  return myNumbers;
}
console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;
