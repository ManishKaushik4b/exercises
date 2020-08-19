function countingValleys(n,s){
  let sum = 0;
  let count = 0;
  for(let i=0;i<n;i++){
    if(s.charAt([i])=='U'){
      if(++sum == 0)
        count++;
    }
    else sum--;
  }
  return count;
}

countingValleys(14, 'DDUUDDUDUUUDDU')