/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let n = columnNumber;
    const res = [];
    while (n >= 1) {
        res.push(((n - 1) % 26) + 65);
        n = Math.floor((n - 1) / 26);
    }

    return res
        .reverse()
        .map((item) => {
            return String.fromCharCode(item);
        })
        .toString()
        .replaceAll(",", "");
};