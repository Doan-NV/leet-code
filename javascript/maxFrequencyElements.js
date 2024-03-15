/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const obj = {};
    for (var i = 0; i < nums.length; i++) {
        if(obj[nums[i]] == undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }

    let max = 0;
    let maxKey = 0;
    for (const key in obj) {
        if(obj[key] > max) {
            max = obj[key];
        }
    }

    let result = [];
    // return all key with max value
    for (const key in obj) {
        if(obj[key] == max) {
            result.push(parseInt(key));
        }
    }

    let count = 0;
    for (var i = 0; i < nums.length; i++) {
        if(result.includes(nums[i])){
            count ++;
        }
    }
    return count;

};
const nums = [1,2,2,3,1,4];
// const nums = [1,2,3,4,5]
console.log('maxFrequencyElements', maxFrequencyElements(nums))