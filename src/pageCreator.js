import { createHeaderElement } from "./pageEl/header.js";
import { createHomepage } from "./pageEl/homepage.js";
import btnActiveded from "./controller.js";

const pageLoader = function (currentPage, goodOrBadHeader, goodOrBadPage) {
  const entirePage = document.createElement("div");

  entirePage.appendChild(createHeaderElement(currentPage, goodOrBadHeader));

  // first we check what page we are on
  if (currentPage === "homePage") {
    entirePage.appendChild(createHomepage(goodOrBadPage));
  }

  console.log("virker stadig");

  document.body.appendChild(entirePage);
};

export { pageLoader };
