let array = [3,2,3,1]
function swapCount(array){
  let arrayHash = {};
  let isVisited = {}
  let count = 0;
  for (let i =1; i<= array.length; i++) {
    arrayHash[array[i-1]] = i;
    isVisited[array[i-1]] = false;
  }
  console.log(arrayHash)
  console.log(isVisited)
  for (let k=1; k<= array.length; k++) {
    if (k == array[k-1]) {
      isVisited[k] = true;
      continue;
    }
    else if (!isVisited[k]) {
      isVisited[k] = true;
      isVisited[arrayHash[k]] = true;
      count++
    }
  }
  return count;
}

swapCount(array)