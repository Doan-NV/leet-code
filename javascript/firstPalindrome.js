/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversed = word.split('').reverse().join('');
        if (word === reversed) {
            return word;
        }
    }
    return '';
 };
 
 const words = ["abc","car","ada","racecar","cool"];
 console.log(firstPalindrome(words)); // ada