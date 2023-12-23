/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    const obj = {};
    for (let i = 1; i <= n; i++) {
        const sumDigit = sumDigits(i);
        if(obj[sumDigit]) {
            obj[sumDigit].push(i);
        } else {
            obj[sumDigit] = [i];
        }
    }
    const arrFlat = Object.entries(obj).map(item => item.length > 1 ? item[1] : item[0]);
    let max = -Infinity;
    for (let index = 0; index < arrFlat.length; index++) {
        const element = arrFlat[index];
        max = Math.max(max, element.length);
    }
    let c = 0;
    for (let index = 0; index < arrFlat.length; index++) {
        const element = arrFlat[index];        
        if (max === element.length) {
            c++;
        }
    }
    return c;
};

const sumDigits = (number) => {
    let count = 0;
    while (number > 0) {
        let a = number % 10;
        count += a;
        number = (number -a) / 10;
    }
    return count;
}


console.log(countLargestGroup(174))