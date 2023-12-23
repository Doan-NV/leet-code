/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let t = [0];
    let max = t[0];
    for (let i = 0; i < gain.length; i++) {
      const element = gain[i];
      let s = element + t[t.length - 1];
      t.push(s);
      if (s >= max) {
        max = s;
      }
    }
    return max;
  };
  
  const gain = [-5, 1, 5, 0, -7];
  console.log(largestAltitude(gain));