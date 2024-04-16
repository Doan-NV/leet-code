/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let length = nums1.length + nums2.length;
    const arr = [];
    let i1 = 0, i2 = 0;
    let i = 0;
    while(i < length) {
        if(i1 < nums1.length && i2 < nums2.length) {
            if(nums1[i1] < nums2[i2]) {
                arr.push(nums1[i1]);
                i1++;
            } else {
                arr.push(nums2[i2]);
                i2++;
            }
        } else if(i1 < nums1.length) {
            arr.push(nums1[i1]);
            i1++;
        } else {
            arr.push(nums2[i2]);
            i2++;
        }
        i++;
    }
    let total = 0;
    if(length % 2 === 0) {
        total = (arr[length / 2] + arr[length / 2 - 1]) / 2;
    } else {
        total = arr[Math.floor(length / 2)];
    
    }
    console.log(total);
    return total;
}