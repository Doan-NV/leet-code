/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let s = sentence.split('');
    for(let i = 97; i <= 122;i++) {
        const a = String.fromCharCode(i);
        if(s.indexOf(a) < 0 ){
            return false;
        }
    }
    return true;
};