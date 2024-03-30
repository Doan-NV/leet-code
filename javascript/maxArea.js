/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let area = 0;
        let width = j - i;
        if (height[i] < height[j]) {
            area = width * height[i];
            i++;
        } else {
            area = width * height[j];
            j--;
        }
        max = Math.max(max, area);
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49