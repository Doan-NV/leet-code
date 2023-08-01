/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    console.log('🚀 ~ file: gcdOfStrings.js:8 ~ gcdOfStrings ~ str1.includes(str2):', str1.includes(str2));
    console.log('🚀 ~ file: gcdOfStrings.js:9 ~ gcdOfStrings ~ str2.includes(str1):', str2.includes(str1));
    if(str1 === str2) {
        return str1;
    }

    if(str1.includes(str2) || str2.includes(str1)) {
        console.log("oce");
    }
};

console.log(gcdOfStrings("ABCABC", "ABC"))