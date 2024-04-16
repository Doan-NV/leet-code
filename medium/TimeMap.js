
var TimeMap = function () {
    this.map = new Map();
    this.set = function (key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key).push({ value, timestamp });
    };
    this.get = function (key, timestamp) {
        if (!this.map.has(key)) {
            return '';
        }
        let arr = this.map.get(key);
        let left = 0, right = arr.length - 1;
        let result = '';
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (arr[middle].timestamp === timestamp) return arr[middle].value;
            if (arr[middle].timestamp < timestamp) {
                left = middle + 1;
                result = arr[middle].value;
            } else {
                right = middle - 1;
            }
        }
        return result;
    }

};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {

};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {

};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// var obj = new TimeMap();
// obj.set('foo', 'bar', 1);
// console.log(obj.get('foo', 1)); // 'bar'
// console.log(obj.get('foo', 3)); // 'bar'
// obj.set('foo', 'bar2', 4);
// console.log(obj.get('foo', 4)); // 'bar2'
// console.log(obj.get('foo', 5)); // 'bar2'
// obj.set('foo', 'bar3', 5);
// console.log(obj.get('foo', 5)); // 'bar3'
// console.log(obj.get('foo', 6)); // 'bar3'
// console.log(obj.map.get('foo'));


var obj1 = new TimeMap();
obj1.set('love', 'high', 10);
obj1.set('love', 'low', 20);
console.log(obj1.get('love', 5)); // ''
console.log(obj1.get('love', 10)); // 'high'
console.log(obj1.get('love', 15)); // 'high'
console.log(obj1.get('love', 20)); // 'low'
console.log(obj1.get('love', 25)); // 'low'
