/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if (n % 4 === 0) {
        return false;
    }
    return true;
};

// neu chia het cho 4 thi se thua boi vi doi phuong se luon co the chia cho 4 va de lai 1, 2, 3 cho minh
// doi phuong co the bat chuoc buoc di cua minh