/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const s = coordinates.split('');
    if (['a', 'c', 'e', 'g'].includes(s[0]) && [1, 3, 5, 7].includes(parseInt(s[1]))) {
      return false;
    }
    if (['b', 'd', 'f', 'h'].includes(s[0]) && [2, 4, 6, 8].includes(parseInt(s[1]))) {
      return false;
    }
    return true;
  };
  // const coordinates = "a1";
  // const coordinates = "h3";
  
  const coordinates = 'b2';
  console.log(squareIsWhite(coordinates));