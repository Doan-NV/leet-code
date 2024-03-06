/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let min = salary[0];
    let max = salary[0];

    for (let index = 1; index < salary.length; index++) {
        const element = salary[index];
        if (min > element) {
            min = element
        }

        if (max < element) {
            max = element
        }
    }
    let sum = 0;
    for (let index = 0; index < salary.length; index++) {
        const element = salary[index];
        if (element !== min && element !== max) {
            sum += element;
        }
    }
    sum = (sum / (salary.length - 2)).toFixed(5);
    return sum;
};

const salary = [4000, 3000, 1000, 2000];
console.log(average(salary))