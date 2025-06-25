import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
import { setString } from "./functions.js";
import { setLength } from "./functions.js";
import { findTees } from "./functions.js";
import { findFirstTees } from "./functions.js";
import { findEndEees } from "./functions.js";
import { findTeesAndEees } from "./functions.js";

const preamble = `We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.`;

document.querySelector("#app").innerHTML = `
  <div>
    <h1>PREAMBLE TO THE U.S. CONSTITUTION:</h1>
    <p class="read-the-docs">
    ${setString(preamble)}
    </p>
    <div class="card">
    ${setLength(preamble)}
    </div>
    <div class="card">
    ${findTees(preamble, "T")}
    </div>
    <div class="card">
    ${findFirstTees(preamble, "T")}
    </div>
    <div class="card">
    ${findEndEees(preamble, "E")}
    </div>
    <div class="card">
    ${findTeesAndEees(preamble, "T", "E")}
    </div>
    </div>
    `;
