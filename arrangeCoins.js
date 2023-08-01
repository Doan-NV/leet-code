/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let i = 1;
    let s = n;
    while(i<s) {
        if(s - i >= i) {
            s-=i;
        } else {
            break;
        }
        i++;
        if(i>s){
            i--;
            break;
        }
    };
    return i;
};
console.log(arrangeCoins(1));
console.log(arrangeCoins(2));
console.log(arrangeCoins(3));
console.log(arrangeCoins(5));
console.log(arrangeCoins(6));
console.log(arrangeCoins(8));


