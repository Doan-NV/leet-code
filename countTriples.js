/**
 * @param {number} n
 * @return {number}
 */
const countTriplesElement = (n) => {
    let count = 0;
    const power = Math.pow(n, 2);
    for (let i = 1; i <= n - 1; i++) {
        let t = power - Math.pow(i, 2);
        if(parseInt(Math.sqrt(t)) === Math.sqrt(t)) {
            count ++;
        }
    }
    return count;
}
var countTriples = function (n) {
    let count = 0;
    const power = Math.pow(n, 2);
    for (let i = 1; i <= n; i++) {
        const t = countTriplesElement(i);
        count += t;
    }
    return count;
};

console.log(countTriples(5))

