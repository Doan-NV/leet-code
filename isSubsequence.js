/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;
    let i=0
    let j=0
    let count=0
    while(j<t.length){
        if(t[j]==s[i]){
            i++
            j++
            count++
        }
        else{
           j++
        }
    }
    return count === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("b", "c"));
console.log(isSubsequence("acb", "ahbgdc"));
