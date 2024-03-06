/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const array = [];
    for (let i = 0; i < s.length; i++) {
        array[indices[i]] = s.charAt(i)
    }
    return array.join('');
};


console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))