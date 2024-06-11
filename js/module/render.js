import { app } from "./assambly.js";


export const render = () => {
  root.innerHTML = app();
};
