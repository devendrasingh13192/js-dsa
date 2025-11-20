function countOccurrences(arr) {
  return arr.reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
  }, {});
}

// Usage
console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
// Output: { a: 3, b: 2, c: 1 }