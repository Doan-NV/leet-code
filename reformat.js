/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const str = [];
    const number = [];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        const ss = parseInt(element);
        if(parseInt(element).toString() === element) {
            number.push(parseInt(element));
        } else {
            str.push(element);
        }
    }
    const strLength = str.length;
    const numberLength = number.length;
    let result = [];
    if(Math.abs(strLength - numberLength) >= 2) {
        result = ['']
    } else {
        if(strLength >= numberLength) {
            result.push(str[0])
            for (let index = 0; index < numberLength; index++) {
                result.push(number[index]);
                result.push(str[index+1]);
            }
        } else {
            result.push(number[0])
            for (let index = 0; index < strLength; index++) {
                result.push(str[index]);
                result.push(number[index+1]);
            }
        }
    }
    return  result.join('');
};


console.log(reformat("3a0b1c2"))