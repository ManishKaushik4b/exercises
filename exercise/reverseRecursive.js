let stringToReverse = "Print a string in reverse order."

let printReverseString = function(index, stringToReverse){
  let reverseString = "";
  if (index >= stringToReverse.length) return reverseString;
  printReverseString(index+1,stringToReverse)
  console.log(stringToReverse[index])
}


console.log(printReverseString(0, stringToReverse))