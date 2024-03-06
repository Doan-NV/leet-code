/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let arrNum1 = num1.split("");
    let arrNum2 = num2.split("");
    let length = arrNum1.length > arrNum2.length ? arrNum1.length - arrNum2.length : arrNum2.length - arrNum1.length;
    console.log("🚀 ~ file: addStrings.js:10 ~ addStrings ~ length:", length)
    
    if (arrNum1.length > arrNum2.length) {
        for (let i = 0; i < length; i++) {
            arrNum2.unshift("0");
        }
    } else if (arrNum1.length < arrNum2.length) {
        for (let i = 0; i < length; i++) {
            arrNum1.unshift("0");
        }
    }
    console.log("🚀 ~ file: addStrings.js:8 ~ addStrings ~ arrNum1:", arrNum1)
    
    console.log("🚀 ~ file: addStrings.js:10 ~ addStrings ~ arrNum2:", arrNum2)
    let a = [];
    let t = 0;
    for (let i = arrNum1.length - 1; i >= 0; i--) {
        const element1 = arrNum1[i];
        const element2 = arrNum2[i];
        let s = parseInt(element1) + parseInt(element2) + t;
        t = Math.floor(s/10);
        if (s >= 10 && i !== 0) {
            s = s % 10;
        };
        a.unshift(s);
    }
    return a;
};
// console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("123", "999"))
// console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("12345", "999"))
// console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("123", "9999")) //10122
// console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("0", "0")) //
// console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("456", "77")) //
// console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("123456789", "987654321")) //
console.log("🚀 ~ file: addStrings.js:7 ~ addStrings ~ addStrings:", addStrings("6", "501")) //



