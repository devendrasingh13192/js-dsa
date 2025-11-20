function findLongestWord(sentence) {
    const words = sentence.split(' ');
    // Sort by length descending and return the first element
    const sorted = words.sort((a, b) => b.length - a.length);
    return sorted[0];
}

// Usage
console.log(findLongestWord("The quick brown fox")); // "quick"