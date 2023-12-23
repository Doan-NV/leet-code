/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


function removeElement(nums, val) {
    let i = 0;
    for( let n of nums ) {
        if( n !== val ) nums[i++] = n
    }
    return i;
};

console.log(removeElement(nums, val))