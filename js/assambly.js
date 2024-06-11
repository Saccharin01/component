import { names } from "./baseData.js";
import { tagComponent } from "./tagComponent.js";


export const app = () => {
  let i = names.map((ele) => {
    if (ele === "조우식") {
      return tagComponent("h1", ele);
    } else {
      return tagComponent("h3", ele);
    }
  });
  return `${i.join("")}`;
};
