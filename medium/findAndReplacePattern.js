/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let hash = {};
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length !== pattern.length) {
            continue;
        }
        const word = words[i];
        const p = pattern;
        let valid = true;
        for (let j = 0; j < word.length; j++) {
            if (hash[p[j]] === undefined) {
                hash[p[j]] = word[j];
            } else if (hash[p[j]] !== word[j]) {
                valid = false;
                break;
            }
        }
        if (valid) {
            const set = new Set(Object.values(hash));
            if (set.size === Object.values(hash).length) {
                result.push(word);
            }
        }
        hash = {};
    }
    return result;
};

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb")); // ["mee","aqq"]