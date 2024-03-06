/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let newWord = word.split('');
    for (let i = 0; i < newWord.length; i++) {
        if(word.charCodeAt(i) < 48 || word.charCodeAt(i) >57 ) {
            newWord[i] = '*';
        }
    }
    const arr = newWord.join('').split('*').filter(item => item !== '').map(item => BigInt(item));
    return [...new Set(arr)].length;
};