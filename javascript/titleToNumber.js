/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    const obj = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9,
        "J": 10,
        "K": 11,
        "L": 12,
        "M": 13,
        "N": 14,
        "O": 15,
        "P": 16,
        "Q": 17,
        "R": 18,
        "S": 19,
        "T": 20,
        "U": 21,
        "V": 22,
        "W": 23,
        "X": 24,
        "Y": 25,
        "Z": 26
    };

    let sum = 0;
    for (let index = columnTitle.length -1 ; index >= 0; index--) {
        const element = columnTitle[index];
        sum = sum + obj[element] * Math.pow(26, columnTitle.length -1 - index);
    }
    return sum;
};


// titleToNumber("ZY")

const obj = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26
};
const lowercaseObj = {};
let value = 0;

for (const key in obj) {
    lowercaseObj[key.toLowerCase()] = value;
    value++;
}
console.log('🚀 ~ file: titleToNumber.js:75 ~ lowercaseObj:', lowercaseObj);