/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    return s.indexOf('01') < 0;
};
const s = "1001";
// const s = "110";
console.log(checkOnesSegment(s));