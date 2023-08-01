/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    return s.split(" ").filter(str => str.trim().length).length;
};
console.log(countSegments("hello, my name is Doannv"));