const preamble = `We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.
`;

export function setString() {
  return preamble.toUpperCase();
}

export function setLength() {
  let length = preamble.length;
  return `The Preamble is ${length} characters long.`;
}

export function findTees() {
  let numberOfTees = 0;
  for (let index = 0; index <= preamble.length; index++) {
    if (preamble.toUpperCase().charAt(index) === "T") {
      numberOfTees++;
    }
  }
  return `The Preamble contains ${numberOfTees} instances of the letter T.`;
}
