/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stackHeights = [];
    let stackIndex = [];
    let maxArea = 0;
    for(let i = 0; i < heights.length; i++) {
        let currentHeight = heights[i];
        let top = stackHeights[stackHeights.length-1];
        let start = i;
        while(stackHeights.length && currentHeight < top && stackIndex.length) {
            let topIndex = stackIndex[stackIndex.length-1];
            let area = top * (i - topIndex);
            stackHeights.pop();
            maxArea = Math.max(maxArea, area);
            top = stackHeights[stackHeights.length-1];
            topIndex = stackIndex[stackIndex.length-1];
            start = topIndex;
            stackIndex.pop();
        }
        stackHeights.push(currentHeight);
        stackIndex.push(start);
    }
    for(let i = 0; i < stackHeights.length; i++) {
        let area = stackHeights[i] * (heights.length - stackIndex[i]);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10
console.log(largestRectangleArea([2,4])); // 10