import "./style.css";
import preamblepic from "./preamble.jpg";
import { setString } from "./functions.js";
import { findCountOfFirstLetter } from "./functions.js";
import { findCountOfLastLetter } from "./functions.js";
import { findCountOfTwoLetters } from "./functions.js";

const preamble = `We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.`;
let sanitized = preamble.toUpperCase().replaceAll(",", "");
let words = sanitized.split(" ");

document.querySelector("#app").innerHTML = `
  <div class="content-area">
    <img class="header-pic" src=${preamblepic} alt="Photo-realistic image of top portion of paper on which the Constitution was written"></>
    <h1>PREAMBLE TO THE U.S. CONSTITUTION:</h1>
    <h4 class="heading">
    ${setString(preamble)}
    </h4>
    <div class="flex-box">
      <div class="card">
      ${findCountOfFirstLetter(words, "T")}
      </div>
      <div class="card">
      ${findCountOfLastLetter(words, "E")}
      </div>
      <div class="card">
      ${findCountOfTwoLetters(words, "T", "E")}
      </div>
    </div>
  </div>
    `;
