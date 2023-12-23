/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    const arrCp = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        arrCp.push(element);
    }
    if (arr.length === 1) {
        return [-1];
    }
    if (arr.length === 2) {
        return [arr[1], -1];
    }

    for (let i = 1; i < arr.length - 1; i++) {
        arrCp.splice(0, 1);
        const max = maxElement(arrCp);
        arr[i - 1] = max;
        if(arrCp.length === 1) {
            break;
        }
    }

    arr[arr.length -2] = arr[arr.length -1];
    arr[arr.length -1] = -1;
    return arr;
};

const maxElement = (array) => {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        max = Math.max(element, max)

    };
    return max;
}

// const arr = [57010,40840,69871,14425,70605];
const arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));