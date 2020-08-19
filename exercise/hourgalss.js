let array = [ 
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]

 
function hourGlassSum(arr){
  let sum = []
  for(let i=0; i< arr.length-2; i++) {
    for(let j=0; j< arr.length-2; j++) {
      sum.push(arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
    }
  }
  console.log(checkMaxNumber(sum))
}
hourGlassSum(array)

function checkMaxNumber(arr){
  let max = arr[0]
  for (let i=1; i< arr.length; i++){
    if (arr[i] > max) max = arr[i]
  }
  return max;
}

