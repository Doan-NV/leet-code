/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let inf = Infinity;
    let x;
    let t = target.charCodeAt(0);
    for (let i = 0; i < letters.length; i++) {
        const element = letters[i];
        let e = element.charCodeAt(0);
        let s = Math.abs(e - t);
        if(s === 0) {
            continue;
        }
        inf = Math.min(inf, s);
        if (inf === s) {
            x = element;
        }
    }
    console.log('🚀 ~ file: nextGreatestLetter.js:19 ~ nextGreatestLetter ~ x:', x);
    console.log('🚀 ~ file: nextGreatestLetter.js:8 ~ nextGreatestLetter ~ inf:', inf);
    return x;
};
nextGreatestLetter(["c","f","j"]
, "d")