export function setString(string) {
  return string.toUpperCase();
}

export function setLength(string) {
  let length = string.length;
  return `The Preamble is ${length} characters long.`;
}

export function findTees(string, ltr) {
  let numberOfTees = 0;
  for (let index = 0; index <= string.length; index++) {
    if (string.toUpperCase().charAt(index).includes(ltr)) {
      numberOfTees++;
    }
  }
  return `The Preamble contains ${numberOfTees} instances of the letter T.`;
}

export function findFirstTees(string, ltr) {
  let numberOfFirstTees = 0;
  for (let index = 0; index <= string.length; index++) {
    if (
      string.toUpperCase().charAt(index) === ltr &&
      string.charAt(index - 1) === " "
    ) {
      numberOfFirstTees++;
    }
  }
  return `The Preamble contains ${numberOfFirstTees} instances of words that start with the letter T.`;
}

export function findEndEees(string, ltr) {
  let numberOfEndEees = 0;
  for (let index = 0; index <= string.length; index++) {
    string.replaceAll(",", "");
    if (
      string.toUpperCase().charAt(index) === ltr &&
      string.charAt(index + 1) === " "
    ) {
      numberOfEndEees++;
    }
  }
  return `The Preamble contains ${numberOfEndEees} instances of words that end with the letter E.`;
}

export function findTeesAndEees(string, ltr1, ltr2) {
  let sanitized = string.toUpperCase().replaceAll(",", "");
  let words = sanitized.split(" ");
  let numberOfTeesAndEees = 0;
  words.forEach((word) => {
    if (word.startsWith(ltr1) && word.endsWith(ltr2)) {
      numberOfTeesAndEees++;
    }
  });
  return `The Preamble contains ${numberOfTeesAndEees} instances of words that start with the letter T and end with the letter E.`;
}
