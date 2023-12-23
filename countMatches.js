/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let t = [];
    switch (ruleKey) {
        case 'type':
            t = items.filter(item => {
                return item[0] === ruleValue
            })
            break;
        case 'color':
            t = items.filter(item => {
                return item[1] === ruleValue
            })
            break;
        case 'name':
            t = items.filter(item => {
                return item[2] === ruleValue
            })
            break;
            
        default:
            break;
    }
    return t.length;
};

const items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver";
console.log(countMatches(items, ruleKey, ruleValue));