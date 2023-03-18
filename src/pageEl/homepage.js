import { btnActiveded } from "../controller";

const createHomepage = function (goodOrBad) {
  const homePageEl = document.createElement("div");
  homePageEl.classList.add("homePageEl");

  if (goodOrBad === "bad") {
    homePageEl.appendChild(createBadHomepage());
  } else {
    homePageEl.appendChild(createGoodHomepage());
  }

  return homePageEl;
};

const createGoodHomepage = function () {
  let el = document.createElement("div");

  return el;
};

const createBadHomepage = function () {
  let el = document.createElement("div");

  return el;
};

export { createHomepage };
