/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let maxDuration = releaseTimes[0];
    let slowestKey = keysPressed[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        const duration = releaseTimes[i] - releaseTimes[i - 1];

        if (duration > maxDuration || (duration === maxDuration && keysPressed[i] > slowestKey)) {
            maxDuration = duration;
            slowestKey = keysPressed[i];
        }
    }

    return slowestKey;
};

// const releaseTimes = [9, 29, 49, 50], keysPressed = "cbcd";
const releaseTimes = [12, 23, 36, 46, 62], keysPressed = "spuda";
// const releaseTimes = [19,22,28,29,66,81,93,97], keysPressed = "fnfaaxha";
// const releaseTimes = [10,19,20,21,22,32], keysPressed = "abodzo";
console.log(slowestKey(releaseTimes, keysPressed));