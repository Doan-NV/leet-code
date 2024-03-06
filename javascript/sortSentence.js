/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const t = s.split(' ');
    const s1 = t.sort((a,b) => {
      return parseInt(a[a.length -1]) - parseInt(b[b.length-1])
    })
    console.log('🚀 ~ file: a.js:10 ~ s1:', s1);

    let x = s1.map(item => {
      return item.slice(0, item.length-1);
    })
    return x.join(' ')
};
// const  s = "is2 sentence4 This1 a3";
const s = "Myself2 Me1 I4 and3";
console.log(sortSentence(s))