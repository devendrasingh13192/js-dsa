function cumulativeSum(arr) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result;
}

console.log(cumulativeSum([1, 2, 3, 4, 5]));
