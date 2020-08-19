function jumpingOnClouds(c){

  let jumps = 0;
  for (let i=0; i < c.length-1; i = i+2) {
    jumps++;
    if (c[i]== 1) i--;
  }
  return jumps
}

jumpingOnClouds([0, 0 ,0, 0 ,1, 0])