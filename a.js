// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maximumProduct = function(nums) {
//     let  x = 1;
//     if(nums.length <= 3) {
//       for (let i = 0; i < nums.length; i++) {
//         x*=nums[i];
//       }
//       return x;
//     }
//     const arr = [...new Set(nums)];
//     let max = -Infinity;
//     // Lặp qua từng phần tử trong mảng
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//           // Tạo chỉnh hợp chập 3 từ bộ 3 phần tử (arr[i], arr[j], arr[k])
//           const permutation = arr[i]*arr[j]*arr[k];
//           console.log("🚀 ~ file: a.js:21 ~ maximumProduct ~ permutation:", permutation)
//           max = Math.max(permutation, max);
//           console.log("🚀 ~ file: a.js:22 ~ maximumProduct ~ max:", max)
//         }
//       }
//     }

//     return max;
// };

// console.log(maximumProduct([1,2,3,2]));
function findPermutations(nums) {
    let x = 1;
    if (nums.length <= 3) {
        for (let i = 0; i < nums.length; i++) {
            x *= nums[i];
        }
        return x;
    }
    const arr = [...nums];
    const permutations = [];
    let max = -Infinity;
    // Lặp qua từng phần tử trong mảng
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const permutation1 = arr[i] * arr[j] * arr[k];
                console.log("🚀 ~ file: a.js:21 ~ maximumProduct ~ permutation:", permutation1)
                // Tạo chỉnh hợp chập 3 từ bộ 3 phần tử (arr[i], arr[j], arr[k])
                const permutation = [arr[i], arr[j], arr[k]];
                max = Math.max(permutation1, max);
                console.log("🚀 ~ file: a.js:44 ~ findPermutations ~ max:", max)
                permutations.push(permutation);
            }
        }
    }

    return permutations;
}

// Sử dụng hàm findPermutations với một mảng đầu vào
const inputArray = [1, 2, 3, 2];
const permutations = findPermutations(inputArray);

console.log(permutations);
