/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const obj1 = {};
    const obj2 = {};
    for (let i = 0; i < nums1.length; i++) {
        const element = nums1[i];
        if (!obj1[element]) {
            obj1[element] = i;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        const element = nums2[i];
        if (!obj2[element]) {
            obj2[element] = i;
        }
    }

    const f1 = [], f2 = [];
    for (let i = 0; i < nums1.length; i++) {
        const element = nums1[i];
        if (obj2[element] >= 0) {

        } else {
            if(!f1.includes(element)) {
                f1.push(element);
            }
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        const element = nums2[i];
        if (obj1[element] >= 0) {
        } else {
            if(!f2.includes(element)) {
                f2.push(element);
            }
        }
    }


    return [f1, f2]


    // using set 
    // const set1 = new Set(nums1)
    // const set2 = new Set(nums2)

    // return [
    //     [...set1].filter((n) => !set2.has(n)),
    //     [...set2].filter((n) => !set1.has(n)),
    // ]

};
console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1,2,3,3], [1,1,2,2]))