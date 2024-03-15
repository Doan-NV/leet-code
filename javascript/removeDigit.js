/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let max = '0';
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let temp = number.slice(0, i) + number.slice(i + 1);
            if(temp > max){
                max = temp;
            }
        }
    }
    return max;
};
// Path: javascript/b.js
// const number = "1231", digit = "1";
const number = "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471", digit = "3";
console.log(removeDigit(number, digit));