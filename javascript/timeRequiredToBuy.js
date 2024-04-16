
var timeRequiredToBuy = function (tickets, k) {
    let count = 0;
    // let isTrue = true
    // while (isTrue) {
    //     for (let i = 0; i < tickets.length; i++) {
    //         if (tickets[i] >= 1) {
    //             tickets[i]--;

    //             count++;
    //             if (tickets[k] === 0) {
    //                 isTrue = false;
    //                 break;
    //             }
    //         } else {
    //             continue;
    //         }
    //     }
    //     console.log(tickets);
    //     if (tickets[k] === 0) {
    //         isTrue = false;
    //         return count;
    //     }
    // }

    for (let i = 0; i < tickets.length; i++) {
        if(i <= k) {
            count += Math.min(tickets[i], tickets[k]);
        } else {
            count += Math.min(tickets[i], tickets[k] - 1);
        }
    }
    return count;

};
let tickets = [5, 1, 1, 1], k = 0;
console.log(timeRequiredToBuy(tickets, k)); // 3
tickets = [84,49,5,24,70,77,87,8], k = 3;
console.log(timeRequiredToBuy(tickets, k)); // 8