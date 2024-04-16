/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    if (piles.length === 1) {
        return Math.ceil(piles[0] / h);
    }
    let left = 1;
    let right = Math.max(...piles);
    let result = 0;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let total = 0;
        for (let pile of piles) {
            total += Math.ceil(pile / mid);
        }
        if (total > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};