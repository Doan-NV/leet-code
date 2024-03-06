/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const arr = sentence.split(' ');
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const t = element.slice(0, searchWord.length);
        if(element.includes(searchWord) && t === searchWord) {
            return index + 1;
        }
    }
    return -1;
};
// const sentence = "hellohello hellohellohello", searchWord = "ell";
const sentence = "this problem is an easy problem", searchWord = "pro";
console.log(isPrefixOfWord(sentence, searchWord));