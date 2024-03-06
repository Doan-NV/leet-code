/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let i = 0;
    let length = s.length;
    let str = '';
    while(i < length) {
        let ss = s.slice(i,k + i).split("").reverse().join("");
        str+=ss + s.slice(i +k,2*k + i);
        i+=2*k;
    };
    return str;
};
console.log((reverseStr("abcdefg", 2)));
console.log((reverseStr("abcd", 2)));
