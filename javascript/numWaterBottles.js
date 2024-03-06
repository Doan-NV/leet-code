/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    const v = x(numBottles, numExchange, numBottles)
    return v;
};

const x = (numBottles, numExchange, count) => {
    if (numBottles < numExchange) {
        return count;
    }
    const t = numBottles % numExchange; // phan du 
    const s = Math.floor(numBottles / numExchange); // so chai uong duoc
    const v = count + s; // tong so chai
    return x(t + s, numExchange, v);
}


// console.log(numWaterBottles(9, 3));
console.log(numWaterBottles(15, 4))
