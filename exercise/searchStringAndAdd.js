let strArr = ["B:-1", "A:1", "B:3", "A:5"];

function SearchingChallenge(strArr) {
  let mapData= {}
  let updatedString = [];
  let sum = 0;
  for (let i=0; i<strArr.length; i++) {
    let splitString = strArr[i].split(':')
  
    if (mapData[splitString[0]]) {
      mapData[splitString[0]].push(parseInt(splitString[1]))
      
    }else {
      mapData[splitString[0]] = [parseInt(splitString[1])]
    }
  }

  for (let key in mapData) {
    sum = mapData[key].reduce((a, b) => a + b, 0)
    updatedString.push(`${key}:${sum}`)
  }
  return updatedString.reverse().join(","); 

}

   
// keep this function call here 
console.log(SearchingChallenge(strArr));