var numbers = [42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,];

function findPair(arr){
  let mapArray = {};
  let count = 0;

  for (let i= 0; i<arr.length; i++) {
    if (mapArray[arr[i]]) {
      mapArray[arr[i]].pushNumber.push(arr[i])
    }else {
      mapArray[arr[i]] = {
        pushNumber : [arr[i]]
      }
    }
  }
  
  for (let key in mapArray) {
    if (mapArray[key].pushNumber.length > 1){
      if (mapArray[key].pushNumber.length %2 !== 0) {
        mapArray[key].pushNumber.pop()
        count += mapArray[key].pushNumber.length/2
      }
      else if (mapArray[key].pushNumber.length %2 === 0) {
        count += mapArray[key].pushNumber.length/2
      }
    }
  }
  return count
}

findPair(numbers)