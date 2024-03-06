/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    const miliSeconds = new Date(date1).getTime() - new Date(date2).getTime();
    return Math.abs(Math.floor(miliSeconds / 1000 / 60 / 60 / 24));
};
const date1 = "2019-06-29", date2 = "2019-06-30";
console.log(daysBetweenDates(date1, date2));