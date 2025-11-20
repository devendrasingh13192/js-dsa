function toCamelCase(str) {
  return str
    .split(/[-_]/)
    .map((word, index) => {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join('');
}

console.log(toCamelCase('hello--world'));
