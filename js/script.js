import { names as baseData } from "./baseData.js";
import { tagComponent as asd } from "./tagComponent.js";
import { app as assambly } from "./assambly.js";
import { render } from "./render.js";
console.log(baseData);
console.log(asd);
console.log(assambly);
console.log(render);

const root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", () => {
  render();
});
