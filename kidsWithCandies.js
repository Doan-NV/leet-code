/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    const list = candies.map(item => {
        const max = item + extraCandies;
        if( max === Math.max(...candies, max)) {
            return true;
        } else {
            return false;
        }
    })
    return list;

    /*
    const maxcandies = Math.max(...candies);
    let resArray = [];
    for(let i=0;i<candies.length;i++){
        candies[i] = candies[i]+extraCandies;
    }
    for(let i=0;i<candies.length;i++){
        if(candies[i]>=maxcandies){
            resArray.push(true);
        }
        else {
            resArray.push(false);
        }
    }
    return resArray;
    */
};

console.log(kidsWithCandies([4,2,1,1,2], 1))