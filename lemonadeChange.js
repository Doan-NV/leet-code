/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const listMoneyTenDollar = [];
    const listMoneyFiveDollar = [];
    for (let index = 0; index < bills.length; index++) {
        const element = bills[index];
        if(element === 5) {
            listMoneyFiveDollar.push(element)
        } else if(element === 10) {
            if(listMoneyFiveDollar.length<1) {
                return false;
            }
            listMoneyFiveDollar.pop();
            listMoneyTenDollar.push(element);
        } else {
            if(listMoneyFiveDollar.length > 0 && listMoneyTenDollar.length > 0) {
                listMoneyFiveDollar.pop();
                listMoneyTenDollar.pop();
            } else if(listMoneyTenDollar.length<1 && listMoneyFiveDollar.length>=3) {
                listMoneyFiveDollar.pop();
                listMoneyFiveDollar.pop();
                listMoneyFiveDollar.pop();
            } else {
                return false;
            }
        }
    }
    return true;
};

// console.log(lemonadeChange([5,5,10,20]))

// console.log(lemonadeChange([5,5,10,10,20]))
console.log(lemonadeChange([5,5,5,10,20]));