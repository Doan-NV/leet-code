/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const word1str = word1.join('');
    const word2str = word2.join('');

    return word1str === word2str;
};
// const word1 = ["ab", "c"], word2 = ["a", "bc"];
const word1 = ["a", "cb"], word2 = ["ab", "c"]
console.log(arrayStringsAreEqual(word1, word2));