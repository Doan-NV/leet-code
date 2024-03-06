/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {

    let arr = [];
    for (let i = 0; i < mat.length; i++) {
        let obj = {
            key: i,
            value: 0,
        };
        const element = mat[i];
        for (let j = 0; j < element.length; j++) {
            if (element[j] === 1) {
                obj.value++;
            }
        }
        arr.push(obj)
    }
    const arrSorted = arr.sort((a, b) => {
        const x = a.value;
        const y = b.value;
        if(x >=y) {
            return 1;
        } else {
            return - 1;
        }
    })
    const newarr = [];
    for (let index = 0; index < k; index++) {
        const element = arrSorted[index].key;
        newarr.push(element);
    }

    return newarr;

};

kWeakestRows([[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]], 3)