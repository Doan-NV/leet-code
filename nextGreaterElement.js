/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        const elementNum1 = nums1[i];
        let s = -1;
        for (let j = 0; j < nums2.length; j++) {
            const elementNum2 = nums2[j];
            if(elementNum1 === elementNum2) {
                for (let k = j; k < nums2.length; k++) {
                    const elementK = nums2[k];
                    if(elementK > elementNum2) {
                        s = elementK;
                        break;
                    }
                }
            }
        }
        arr.push(s);
    }
    return arr;
};

console.log(nextGreaterElement( [4,1,2], [1,3,4,2]));
console.log(nextGreaterElement( [2, 4], [1,2,3,4]));