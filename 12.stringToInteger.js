function stringToInt(str) {
  const num = Number(str);
  return Number.isInteger(num) ? num : null;
}

// Usage
console.log(stringToInt("123"));     // 123
console.log(stringToInt("123.45"));  // null (not integer)
console.log(stringToInt("123abc"));