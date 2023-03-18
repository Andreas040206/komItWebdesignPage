import { first } from "lodash";
import { createHeaderElement } from "./pageEl/header";
import { createHomepage } from "./pageEl/homepage";

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

const removeChildren = function (parrent) {
  while (parrent.firstChild) {
    parrent.removeChild(parrent.firstChild);
  }
};

export { pageLoader, removeChildren };
