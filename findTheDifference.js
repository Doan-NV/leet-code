/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const l = (s+t);
    const objS = {};
    for (let index = 0; index < s.length; index++) {
        const element = l[index];
        if(objS[element]) {
            objS[element] ++;
        } else {
            objS[element] = 1;
        }
    }

    const objT = {};
    for (let index = 0; index < t.length; index++) {
        const element = t[index];
        if(objT[element]) {
            objT[element] ++;
        } else {
            objT[element] = 1;
        }
    }

    for (const key in objT) {
        if(objS[key] !== objT[key]) {
            return key;
        };
    }
};
const s = "abcd", t = "abcde";
console.log(findTheDifference(s, t));