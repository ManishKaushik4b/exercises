let array = [2, 3, 1, 5, 4 ]

let swapCount = function(array) {
  let count = 0;
  for (let i=0; i<array.length;i++) {
    //if (array[i] != i + 1)
    if (array[i] != i + 1) {
    
      while (array[i] != i + 1)  {
        let temp = 0;  
        temp = array[array[i] - 1]; 
        array[array[i] - 1] = array[i]; 
        array[i] = temp; 
        console.log(array)
        count++; 
      }
    }
  }
  return count;
}

swapCount(array)