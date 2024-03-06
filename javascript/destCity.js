/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let hashmap = new Map();
    for (let i = 0; i < paths.length; i++) {
        const element = paths[i];
        hashmap.set(element[0], element[1]);
    }

    for (const city of hashmap.values()) {
        if(!hashmap.has(city)) {
            return city;
        }
    }
};
