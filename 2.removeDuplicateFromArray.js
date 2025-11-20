// [2,2,1,5,3,3,4]

function removeDuplicate(arr) {
  var outputArray = [],
    exists = {},
    ele;
  for (let i = 0; i < arr.length; i++) {
    ele = arr[i];
    if (!exists[ele]) {
      outputArray.push(ele);
      exists[ele] = true;
    }
  }
  return outputArray;
}

console.log(removeDuplicate([2, 2, 1, 5, 3, 3, 4]));
