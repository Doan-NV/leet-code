/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let arr = s.split(' ');
    console.log("🚀 ~ wordPattern ~ arr:", arr)
    let hash = {};

    if (pattern.length !== arr.length) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (hash[pattern[i]] === undefined) {
            hash[pattern[i]] = arr[i];
        } else {
            if (hash[pattern[i]] !== arr[i]) {
                return false;
            }
        }
    }
    console.log("🚀 ~ wordPattern ~ hash:", hash)

    let set = new Set();
    for (let key in hash) {
        if (set.has(hash[key])) {
            return false;
        }
        set.add(hash[key]);
    }
    return true;
};
// const pattern = "abba", s = "dog cat cat fish";
const pattern = "jquery", s = "jquery";
console.log(wordPattern(pattern, s)); // true