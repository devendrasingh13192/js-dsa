// hello world

function reverseOrder(string) {
  const reverse = string.split(' ').reverse().join(' ');
  return reverse;
}

console.log(reverseOrder('Hello world'));
