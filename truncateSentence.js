/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let t = s.split(' ');
    if( t.length === k) {
        return s;
    };

    t = t.splice(0, k).join(' ') ;
    return t;
};
const s = "Hello how are you Contestant", k = 4;
console.log(truncateSentence(s, k));