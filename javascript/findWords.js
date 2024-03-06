/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter(word => keyboard.some(set => [...word].every(char => set.has(char))));
};

const keyboard = [
    new Set("qwertyuiop" + "qwertyuiop".toUpperCase()),
    new Set("asdfghjkl" + "asdfghjkl".toUpperCase()),
    new Set("zxcvbnm" + "zxcvbnm".toUpperCase()),
];