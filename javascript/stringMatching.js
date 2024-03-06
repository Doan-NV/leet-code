/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const arr = [];
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        for (let j = 0; j < words.length; j++) {
            if(j !== i && element.includes(words[j])) {
                arr.push(words[j])
            }
        }
    }
    return [...new Set(arr)];
};

console.log(stringMatching(["mass","as","hero","superhero"]))