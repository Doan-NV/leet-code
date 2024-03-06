/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    const t = n.toString().split('').reverse();
    const arr = []
    for (let index = t.length - 1; index >= 0; index--) {
        const element = t[index];
        arr.push(element);
        if (index % 3 === 0 && index !== 0) {
            arr.push('.')
        }
    }
};

thousandSeparator(1234567899999);