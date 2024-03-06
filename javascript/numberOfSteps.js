// /**
//  * @param {number} num
//  * @return {number}
//  */
// var numberOfSteps = function (num) {
//     let count = 0;
//     const s = txt(num, count);
//     return s;
// };

// function txt(num, count) {
//     let s = count;
//     if (num === 0) {
//         return s;
//     } else if (num % 2 === 0) {
//         s ++;
//         return txt(num / 2, s);
//     } else if (num !== 0 && num % 2 === 1) {
//         s ++;
//         return txt(num - 1, s)
//     }
// };
// console.log(numberOfSteps(123))


var numberOfSteps = function (num) {
    let count = 0;
    while(num!=0) {
        if(num%2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        count ++;
    }
    return count;
};


console.log(numberOfSteps(123))