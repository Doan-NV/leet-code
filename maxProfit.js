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

console.log(maxProfit([7, 1, 5, 3, 6, 4]));