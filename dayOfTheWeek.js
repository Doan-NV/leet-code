/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    const dayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = new Date(`${month}/${day}/${year}`).getDay();
    return dayString[dayOfWeek]
};

console.log(dayOfTheWeek(31, 8, 2019));