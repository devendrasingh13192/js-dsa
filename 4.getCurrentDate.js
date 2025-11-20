const getCurrentDate = () => new Date().toISOString().split('T')[0];

console.log(getCurrentDate())