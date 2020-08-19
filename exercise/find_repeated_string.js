let string ="kab";

function repeatedString(s,n){
  
  let count = 0;

  for(let i=0; i<s.length; i++){
    if (s.charAt(i)=="a") count++
  }
  let div =  Math.floor(n/s.length);
  let reminder = Math.floor(n%s.length)
  count = div*count
  
  for(let i=0; i<reminder; i++){
    if(s.charAt(i) == 'a')
      count++;
  }
  return count;
}

repeatedString(string, 10)