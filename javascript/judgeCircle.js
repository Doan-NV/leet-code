/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0; let y = 0;
    for (let i = 0; i < moves.length; i++) {
        const element = moves[i];
        switch(element) {
            case 'L':
                x ++;
                break;
            case 'R':
                x --;
                break;
            case 'U':
                y ++;
                break;
            case 'D':
                y --;
                break;
        }
    }
    return x === 0 && y === 0;
};

console.log(judgeCircle("LRLR"));