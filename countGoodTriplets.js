/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(Math.abs(arr[i] - arr[j]) > a) {
                continue;
            }
            for (let k = j+1; k  < arr.length; k++) {
                if(Math.abs(arr[j] - arr[k]) > b) {
                    continue;
                }
                if(Math.abs(arr[k] - arr[i]) <= c) {
                    console.log("run here");
                    result ++;
                }
                
            }
        }
        
    }

    return result;
};
const arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3;
console.log(countGoodTriplets(arr,a,b,c))