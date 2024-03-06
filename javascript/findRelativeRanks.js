/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const objScore = score.map((item, index) => {
        return {score: item, index: index+1}
    });
    const s = objScore.sort((a,b) => {
        return a.score > b.score ? -1 : 1;
    })

   const t =  s.map((item, index) => {
        if(index === 0) {
            item.rank = "Gold Medal";
        } else if(index === 1) {
            item.rank = "Silver Medal";
        } else if(index === 2) {
            item.rank = "Bronze Medal";
        } else {
            item.rank = index + 1;
        }
        return item;
    });

    const ss = t.sort((a,b) => {
        return a.index > b.index ? 1 : -1;
    }).map(item => {
        return item.rank.toString();
    });
    return ss;
};

findRelativeRanks([10,3,8,9,4])