const longestConsecutive = (arr,target) => 
 arr.reduce((acc,curr) => ({
   count : target === curr ? acc.count + 1 : 0,
   max : Math.max(acc.max, curr === target ? acc.count + 1 : 0)
 }),{count : 0, max : 0}).max;

 console.log(longestConsecutive([1, 2, 2, 3, 3, 3, 2, 2, 1], 3)); // 3