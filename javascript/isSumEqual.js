/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    const lowercaseObj = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
      i: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
      n: 13,
      o: 14,
      p: 15,
      q: 16,
      r: 17,
      s: 18,
      t: 19,
      u: 20,
      v: 21,
      w: 22,
      x: 23,
      y: 24,
      z: 25
    }
  
    const a = firstWord.split('').map(item => {
      return lowercaseObj[item];
    }).join('');
  
    const b = secondWord.split('').map(item => {
      return lowercaseObj[item];
    }).join('');
  
    const c = targetWord.split('').map(item => {
      return lowercaseObj[item];
    }).join('');
  
    return parseInt(a) + parseInt(b) === parseInt(c);
  };
  
  const  firstWord = "acb", secondWord = "cba", targetWord = "cdb";
  console.log(isSumEqual(firstWord, secondWord, targetWord))
  