/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    const check = [[0, 0]];
    let a = [0, 0];
    for (let i = 0; i < path.length; i++) {
        const element = path[i];

        switch (element) {
            case 'N': // len
                a[0]++;
                break;

            case 'S': //xuong
                a[0]--;
                break;

            case 'E': // phai
                a[1]++;
                break;
            case 'W': // trai
                a[1]--;
                break;

            default:
                break;
        }
        if (check.some(arr => arr.every((value, index) => value === a[index]))) {
            return true;
        } else {
            const s = JSON.parse(JSON.stringify(a));
            check.push(s);
        }

    }
    return false;
};

// const path = "NES";
const path = "NESWW";
// const path = "NNSWWEWSSESSWENNW";
console.log(isPathCrossing(path));