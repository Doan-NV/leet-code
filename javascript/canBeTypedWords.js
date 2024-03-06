/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const arr = text.split(' ');
    let l = arr.length;
    const brokenLettersArr = [...new Set(brokenLetters.split(''))];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < brokenLettersArr.length; j++) {
            if (arr[i].includes(brokenLettersArr[j])) {
                l--;
                break;
            }
        }
    }
    return l;
};

// const text = "hello world", brokenLetters = "ad";
// const text = "leet code", brokenLetters = "lt";
const  text = "leet code", brokenLetters = "e";
console.log(canBeTypedWords(text, brokenLetters)); // 1