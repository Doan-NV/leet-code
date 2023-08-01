/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const stringAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let objValue = {} ;
    for (let i = 0; i < widths.length; i++) {
        const element = widths[i];
        objValue[stringAlphabet[i]] = element;
    }

    let totalLine = 1;
    let totalLengthInLine = 0;
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        totalLengthInLine+=objValue[element];
        let x = totalLengthInLine + objValue[s[i+1]];
        if(totalLengthInLine === 100 || x >100) {
            totalLine += 1;
            if( totalLengthInLine === 100 && isNaN(x)) {
                totalLine -= 1;
                totalLengthInLine = 100;
            } else {

                totalLengthInLine = 0;
            }
        }
    }
    return [totalLine, totalLengthInLine]
};

numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz");
numberOfLines([3,4,10,4,8,7,3,3,4,9,8,2,9,6,2,8,4,9,9,10,2,4,9,10,8,2], "mqblbtpvicqhbrejb")
