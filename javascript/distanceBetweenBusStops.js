/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    if(start === destination) {
        return 0;
    }
    if (start < destination) {
        let sum = 0;
        for (let i = start; i < destination; i++) {
            const element = distance[i];
            sum += element;
        }
        let sum1 = 0;
        for (let i = 0; i < start; i++) {
            const element = distance[i];
            sum1 += element;
        }
        let sum2 = 0;
        for (let index = destination; index < distance.length; index++) {
            const element = distance[index];

            sum2 += element;
        }

        return Math.min(sum, (sum1 + sum2));
    }

    if (start > destination) {
        let sum = 0;
        for (let i = destination; i < start; i++) {
            const element = distance[i];
            sum += element;
        }
        let sum1 = 0;
        for (let i = 0; i < destination; i++) {
            const element = distance[i];
            sum1 += element;
        }
        let sum2 = 0;
        for (let index = start; index < distance.length; index++) {
            const element = distance[index];

            sum2 += element;
        }

        return Math.min(sum, (sum1 + sum2));
    }
};

// const distance = [1, 2, 3, 4], start = 0, destination = 1;
// const distance = [1,2,3,4], start = 0, destination = 2;
const distance = [7, 10, 1, 12, 11, 14, 5, 0], start = 7, destination = 2;
console.log(distanceBetweenBusStops(distance, start, destination));