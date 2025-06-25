import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
import { setString } from "./functions.js";
import { setLength } from "./functions.js";
import { findTees } from "./functions.js";
import { findFirstTees } from "./functions.js";
import { findEndEees } from "./functions.js";
import { findTeesAndEees } from "./functions.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>PREAMBLE TO THE U.S. CONSTITUTION:</h1>
    <p class="read-the-docs">
    ${setString()}
    </p>
    <div class="card">
    ${setLength()}
    </div>
    <div class="card">
    ${findTees()}
    </div>
    <div class="card">
    ${findFirstTees()}
    </div>
    <div class="card">
    ${findEndEees()}
    </div>
    <div class="card">
    ${findTeesAndEees()}
    </div>
    </div>
    `;
