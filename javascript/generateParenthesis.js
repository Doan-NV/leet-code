/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [];
    let results = [];
    let dfs = (left, right, str) => {
        if(left < n) {
            stack.push('(');
            dfs(left + 1, right, str + '(');
            stack.pop();
        }

        if (right < left) {
            stack.push(')');
            dfs(left, right + 1, str + ')');
            stack.pop();
        }

        if(left === n && right === n) {
            results.push(str)
            return;
        }
    }
    dfs(0,0,'');
    return results;
};