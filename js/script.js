// import { names as baseData } from "./baseData.js";
// import { tagComponent as asd } from "./tagComponent.js";
// import { app as assambly } from "./assambly.js";
// import { render } from "./render.js";
// console.log(baseData);
// console.log(asd);
// console.log(assambly);
// console.log(render);

import {assembly, baseData, render, tagComponent} from "./moduleAssembly.js";
console.log(assembly())


const root = document.getElementById("root");

// render()
document.addEventListener("DOMContentLoaded", () => {
  render();
});
