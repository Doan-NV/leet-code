/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    // time out
    // let area = 0;
    // for (let i = 0; i < height.length-1; i++) {
    //     for (let j = 1; j < height.length; j++) {
    //         let max = Math.min(height[i], height[j]);
    //         x = j - i;
    //         let areaX = x * max;
    //         area = Math.max(area, areaX);
    //     }
    // }
    // return area;


    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const currentArea = minHeight * width;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
    
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
