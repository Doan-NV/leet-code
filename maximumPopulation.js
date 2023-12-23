/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    const t = logs.sort((a,b) => a[0] - b[0]);
    let obj = {};
    for (let i = 0; i < logs.length; i++) {
        const element = logs[i];
        for (let j = element[0]; j < element[1]; j++) {
            if(obj[j]) {
                obj[j] ++;
            } else {
                obj[j] = 1;
            }
        }
        
    }

    obj = Object.entries(obj);
    let max = obj[0];
    for (let index = 1; index < obj.length; index++) {
        const element = obj[index];
        if(element[1] > max[1]) {
            max = element;
        }
    }

    return max[0];
};

const logs = [[1950,1961],[1960,1971],[1970,1981]];
console.log(maximumPopulation(logs));