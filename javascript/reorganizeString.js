/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    if (s.length === 1) {
        console.log('🚀 ~ file: a.js:7 ~ length:', length);
        return s;
    }
    if (s.length === 2) {
        s[0] !== s[1] ? s : "";
    }
    const objStr = {};
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (objStr[element]) {
            objStr[element]++;
        } else {
            objStr[element] = 1;
        }

    }
    const arr = Object.entries(objStr).sort((a, b) => a[1] >= b[1] ? -1 : 1);

    if (arr[0][1] > (s.length + 1) / 2) {
        return "";
    }
    const arrStrSorted = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = 0; j < element[1]; j++) {
            arrStrSorted.push(element[0])

        }

    }
    let result = [];
    let t = 0;
    for (let i = 0; i < arrStrSorted.length; i += 2) {
        result[i] = arrStrSorted[t++]
    }

    for (let i = 1; i < arrStrSorted.length; i += 2) {
        result[i] = arrStrSorted[t++]
    }
    return result.join('');
};


/**
 * sap xep theo thu tu xuat hien nhieu nhat, sau do lap qua va put so le vao
 */
console.log(reorganizeString('aaaaaabbbccccccccc'));