function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Usage
console.log(capitalizeWords("hello world")); // "Hello World"