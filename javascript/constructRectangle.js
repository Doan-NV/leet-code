/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let sqrt = Math.floor(Math.sqrt(area));
    let difference = area - 1;
    let j = area; k = 1;
    for (let i = 1; i <= sqrt; i++) {
        let qou = area / i;
        if(area % i === 0) {
            let s = qou - i;
            if(s< difference){
                j = i;
                k = qou;
                difference = s;
            }
        };
    }
    return k > j ? [k, j] : [j, k];
};

console.log(constructRectangle(12));
console.log(constructRectangle(37));
console.log(constructRectangle(122122));
