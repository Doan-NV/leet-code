/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let output = []
    let min = Infinity;
    arr = arr.sort((a, b) => a - b);


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i+1] - arr[i];
        if (element < min) {
            min = element;
            output = [[arr[i], arr[i + 1]]];
        } else if(element === min) {
            output.push([arr[i], arr[i + 1]])
        }
    }
    return output;
};
// const arr = [4, 2, 1, 3];
// const arr = [8,-68,-32,-81,83,93,-96,62,-103,-94,-66,74];
const arr = [-85094, 85888, 11307, -46123, -11703, 15548, 15901, -79359, 43432, -4189, 16803, 93124, -7351, -72344, -38197, -78148, -313, 81082, -86474, -19783, -15346, 45946];
console.log(minimumAbsDifference(arr))