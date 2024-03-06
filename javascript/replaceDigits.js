/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const t = s.split('').map((item, index) => {
        const num = parseInt(item);
        if (!isNaN(num)) {
            return convertToChar(s[index - 1], num);
        } else {
            return item;
        }
    })
    return t.join('');
};
const convertToChar = (char, num) => {
    const charCode = char.charCodeAt(0);
    const newCharCode = charCode + num;
    return String.fromCharCode(newCharCode);
}
// https://leetcode.com/problems/replace-all-digits-with-characters/÷
console.log(replaceDigits('a1b2c3d4e'))