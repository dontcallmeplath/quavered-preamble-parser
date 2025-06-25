export function setString(string) {
  return string.toUpperCase();
}

export function findCountOfFirstLetter(array, ltr) {
  let count = 0;
  array.forEach((word) => {
    if (word.startsWith(ltr)) {
      count++;
    }
  });
  return `The Preamble contains ${count} instances of words that start with the letter ${ltr}.`;
}

export function findCountOfLastLetter(array, ltr) {
  let count = 0;
  array.forEach((word) => {
    if (word.endsWith(ltr)) {
      count++;
    }
  });
  return `The Preamble contains ${count} instances of words that end with the letter ${ltr}.`;
}

export function findCountOfTwoLetters(array, ltr1, ltr2) {
  let count = 0;
  array.forEach((word) => {
    if (word.startsWith(ltr1) && word.endsWith(ltr2)) {
      count++;
    }
  });
  return `The Preamble contains ${count} instances of words that start with the letter ${ltr1} and end with the letter ${ltr2}.`;
}
