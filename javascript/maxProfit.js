/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let maxProfitNumber = 0;
    while (right < prices.length) {
        if(prices[left] < prices[right]) {
            profit = prices[right] - prices[left];
            maxProfitNumber = Math.max(profit, maxProfitNumber)
        } else {
            left = right;
        }
        right ++;
    }
    return maxProfitNumber;
};

var maxProfit = function (prices) {
    let buy = prices[0];
    let buyIndex = 0;
    let sell = prices[1];
    let sellIndex = 1;
    if (prices.length === 1) {
        return 0;
    }
    if (prices.length === 2) {
        return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
    }
    let max = prices[1] - prices[0];
    for (let i = 1; i <= prices.length; i++) {
        let current = prices[i];
        let diff = current - buy;
        if (diff > max) {
            max = diff;
            sell = current;
            sellIndex = i;
        }
        if (current < buy) {
            buy = current;
            buyIndex = i;
        }
    }
    console.log(buy, sell)
    console.log(buyIndex, sellIndex)
    return max > 0 ? max : 0;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log('=======')

console.log(maxProfit([7, 6, 4, 3, 1])) // 0
console.log('=======')

console.log(maxProfit([1, 2])) // 1
console.log('=======')

console.log(maxProfit([2, 4, 1])) // 2
console.log('=======')

console.log(maxProfit([2, 1, 4])) // 3
console.log('=======')

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2])) // 2
console.log('=======')

console.log(maxProfit([2, 1, 2, 0, 1])) // 1
console.log(maxProfit([7, 1, 5, 3, 6, 4]));