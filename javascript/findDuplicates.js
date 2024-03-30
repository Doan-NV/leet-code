/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let t = [];
    let set = new Set();
    for (let i = 0; i < n.length; i ++) {
        if(set.has(n[i])) {
            t.push(n[i]);
        } else {
            set.add(n[i]);
        }
    }

    return t;
};