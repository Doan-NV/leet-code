/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) {
        return 1;
    }
    var dp = [];
    for (var i = 0; i < m; i++) {
        dp[i] = [];
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};
// const m = 3, n = 7;
const m = 3, n = 2;

console.log(uniquePaths(m, n));