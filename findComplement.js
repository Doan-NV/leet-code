/**
 * @param {number[]} nums
 * @return {number}
 */
var findComplement = function(nums) {
    let arrNums = nums.toString(2).split("");
    let s = [];
    for (let i = 0; i < arrNums.length; i++) {
        let element = arrNums[i];
        if(element == "0") {
            element = "1";
        } else if(element == "1") {
            element = "0"
        }
        s.push(element);
    };
    return parseInt(s.join(""), 2);
};

console.log(findComplement(5));