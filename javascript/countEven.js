/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let t = 0;
    for (let i = num - 1; i > 0; i--) {
        const count = countInterger(i);
        if (count % 2 === 0) {
            t++;
        }
    }
    return t;
};
const countInterger = (num) => {
    const arr = num.toString().split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        count+= parseInt(element);
    }
    return count;
}

console.log(countEven(30));