console.log(canPartition([1, 1, 3, 4, 7]))
function canPartition(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];

  // if 'sum' is a an odd number, we can't have two subsets with equal sum
  if (sum % 2 !== 0) return -1;

  return checkSubset(num, num.length, sum / 2);
};

function checkSubset(divisors, totalDivisorsLength, number) {
  let setOne = [];
  let setTwo = [];
  for (let i=0; i<= divisors.length; i++) {
    if (number == 0) break;
    if (divisors[totalDivisorsLength -1] == number && totalDivisorsLength-1 !== 0) {
      totalDivisorsLength-= 1;
      setTwo.push(divisors[totalDivisorsLength])
      continue;
    }else if (divisors[totalDivisorsLength -1] > number) {
      totalDivisorsLength-= 1;
      setTwo.push(divisors[totalDivisorsLength])
      continue;
    }
   
    totalDivisorsLength-= 1
    number =  number - divisors[totalDivisorsLength]
    setOne.push(divisors[totalDivisorsLength])
  }

  setOne.sort(function(a, b){return a-b});
  setTwo.sort(function(a, b){return a-b});
  return setOne.concat(setTwo).join(",")
}


// function canPartitionRecursive(num, sum, currentIndex) {
//   // console.log(num)
//   // base check
//   if (sum === 0) return true;

//   if (num.length === 0 || currentIndex >= num.length) return false;

//   // recursive call after choosing the number at the currentIndex
//   // if the number at currentIndex exceeds the sum, we shouldn't process this
//   if (num[currentIndex] <= sum) {
//     if (canPartitionRecursive(num, sum - num[currentIndex], currentIndex + 1))
//     console.log(currentIndex);
//     return true;
//   }

//   // recursive call after excluding the number at the currentIndex
//   return canPartitionRecursive(num, sum, currentIndex + 1);
// }

// console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
//console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
//console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);

