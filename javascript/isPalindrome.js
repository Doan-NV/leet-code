/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const t = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
    let i = 0;
    let j = t.length - 1;
    while (i < j) {
        if (t[i] !== t[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))