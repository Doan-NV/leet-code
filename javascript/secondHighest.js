/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const arr = s.split('').filter(item => {
        return !isNaN(item) && !isNaN(parseFloat(item))
    });

    const max = Math.max(...arr.map(item => parseInt(item)));
    console.log('🚀 ~ file: a.js:9 ~ arr:', arr);
    console.log('🚀 ~ file: a.js:11 ~ max:', max);
    let min = -1;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log('🚀 ~ file: a.js:16 ~ element:', element);
        if(parseInt(element) > min && parseInt(element) < max) {
            min = element;
        }
        
    }

    return min;
};
const s = "dfa12321afd";
console.log(secondHighest(s))