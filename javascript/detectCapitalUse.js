/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toUpperCase() === word) { return true } 
    else if (word.toLowerCase() === word) { return true } 
    else if (word.charAt(0).toUpperCase() === word.charAt(0) && word.slice(1).toLowerCase() === word.slice(1) ) { return true }
    return false;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("g"));
console.log(detectCapitalUse("gaA"));
console.log(detectCapitalUse("Aggg"));



