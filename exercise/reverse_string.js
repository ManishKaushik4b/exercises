let s = ["H","a","n","n","a","h"];

let reverseString = function(s, left = 0, right = s.length-1){
  if (left >= right) return;
  let temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  right--;
  left++
  reverseString(s, left, right)
  return s
}

console.log(reverseString(s, 0, s.length-1))