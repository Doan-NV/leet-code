/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const x = {};
    for (const str of strs) {
        const arr = str.split('').sort().join('');
        if(x[arr]) {
            x[arr].push(str);
        } else {
            x[arr] = [str];
        }
    }
    return Object.values(x);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]