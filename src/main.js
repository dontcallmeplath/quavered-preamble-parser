import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
import { setString } from "./functions.js";
import { setLength } from "./functions.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>PREAMBLE TO THE U.S. CONSTITUTION:</h1>
    <p class="read-the-docs">
    ${setString()}
    </p>
    <div class="card">
    ${setLength()}
    </div>
    </div>
    `;
