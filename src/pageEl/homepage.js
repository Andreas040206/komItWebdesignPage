import btnActiveded from "../controller.js";

const createHomepage = function (goodOrBad) {
  const homePageEl = document.createElement("div");
  homePageEl.classList.add("headerEl");

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
