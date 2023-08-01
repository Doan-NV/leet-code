/**
 * @param {string} s
 * @return {boolean}
 */

// đang có lỗi -- 
var checkRecord = function(s) {
    let late = 0;
    let absent = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if(element === "L") {
            late++;
        } else if(element === "A") {
            absent++;
        }

        if(late > 2 || absent > 3) {
            return false;
        }
    }
    return true;
};

console.log(checkRecord("PPALLP"));
console.log(checkRecord("PPALLL"));
