/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const t = [];
    if (word1.length >= word2.length) {
        for (let index = 0; index < word1.length; index++) {
            t.push(word1[index]);
            if (index < word2.length) {
                t.push(word2[index]);
            }
        }
    } else {
        for (let index = 0; index < word2.length; index++) {
            if (index < word1.length) {
                t.push(word1[index]);
            }
            t.push(word2[index]);
        }
    }

    return t.join('');
};

// const word1 = "abc", word2 = "pqr";
const word1 = "ab", word2 = "pqrs";
console.log(mergeAlternately(word1, word2));