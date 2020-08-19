let string = "Malabbabbalam"

let checkPalindrome = function(string){
  if(!string) return new Error("No String Found")
  let splitString = string.toLowerCase().split("");
  let left = 0;
  let right = splitString.length-1;
  for (let i=0; i< splitString.length;i++){
    if(splitString[left] === splitString[right]){
      left ++
      right --;
      continue
    } 
    else return "String is not palindrome: " + string
  }
  return "String is Palindrome: " +string;
}

checkPalindrome(string)