/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseAnphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  const morseSet = new Set();

  for (let i = 0; i < words.length; i++) {
    let wordMorse = '';
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      wordMorse += morseAnphabet[letter];
    }

    morseSet.add(wordMorse);
  }

  return morseSet.size;
};