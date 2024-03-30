/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let t = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (t.has(nums[i])) {
            return true;
        }
        t.add(nums[i]);
    }
    return false;
};
/**
// * @param {number[]} nums
// * @return {boolean}
// */
// var containsDuplicate = function(nums) {
//    let t = {};
//    for (let i = 0; i < nums.length; i++) {
//        if(t[nums[i]]){
//            return true;
//        } else {
//            t[nums[i]] = true;
//        }
//    }
//    return false;
// };