/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    const t = rectangles.map(item => {
        return Math.min(...item);
    });

    const max = Math.max(...t);
    return t.filter(item => {
        return item === max;
    }).length;
};

const rectangles = [[5,8],[3,9],[5,12],[16,5]];

console.log(countGoodRectangles(rectangles));