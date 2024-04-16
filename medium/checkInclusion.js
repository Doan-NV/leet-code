/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let hash = {};
    for (let i = 0; i < s1.length; i++) {
        hash[s1[i]] = hash[s1[i]] ? hash[s1[i]] + 1 : 1;
    }
    let x = JSON.parse(JSON.stringify(hash));
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let subString = s2.slice(i, i + s1.length);
        let flag = false;
        for (let j = 0; j < subString.length; j++) {
            if (hash[subString[j]] && hash[subString[j]] > 0) {
                hash[subString[j]]--;
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag) {
            return true;
        } else {
            hash = JSON.parse(JSON.stringify(x));
        }
    };
    return false;
}

console.log(checkInclusion('ab', 'eidbaooo')) // true
console.log(checkInclusion('hello', 'ooolleoooleh')) // true