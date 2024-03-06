/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const combinations = [];
    const backtrack = (startIndex, currentCombination) => {
        if (currentCombination.length === k) {
            combinations.push([...currentCombination]);
            return;
        }
        for (let i = startIndex; i < n; i++) {
            currentCombination.push(i+1);
            backtrack(i + 1, currentCombination);
            currentCombination.pop();
        }
    }
    backtrack(0, []);
    return combinations;
};

console.log(combine(4,2))