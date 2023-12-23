/**
 * @param {string[][]} paths
 * @return {string}
 */
const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
var destCity = function (paths) {
    let hashmap = new Map();
    for (let i = 0; i < paths.length; i++) {
        const element = paths[i];
        hashmap.set(element[0], element[1]);
    }

    console.log('🚀 ~ file: a.js:14 ~ hashmap.values():', hashmap.values());
    for (const city of hashmap.values()) {
        if(!hashmap.has(city)) {
            return city;
        }
    }
};

destCity(paths);