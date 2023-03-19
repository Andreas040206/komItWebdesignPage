import { first } from "lodash";
import { createHeaderElement } from "./pageEl/header";
import { createHomepage } from "./pageEl/homepage";
import { createFlowchartPage } from "./pageEl/flowchart";
import goodSwitch from "./img/goodHeaderSwitch.png";
import { btnActiveded } from "./controller";

const pageLoader = function (currentPage, goodOrBadHeader, goodOrBadPage) {
  const entirePage = document.createElement("div");

  entirePage.appendChild(createHeaderElement(currentPage, goodOrBadHeader));

  // first we check what page we are on
  if (currentPage === "homePage") {
    entirePage.appendChild(createHomepage(goodOrBadPage));
  } else if (currentPage === "flowchartPage") {
    entirePage.appendChild(createFlowchartPage(goodOrBadPage));
  }

  console.log("virker stadig");

  document.body.appendChild(entirePage);
};

const removeChildren = function (parrent) {
  while (parrent.firstChild) {
    parrent.removeChild(parrent.firstChild);
  }
};

const createSwitch = function (pageOrHeader, goodOrBad) {
  const headerSwitchCon = document.createElement("div");
  headerSwitchCon.classList.add("headerSwitchCon");

  let headerSwitch = new Image();
  headerSwitch.classList.add("goodHeaderSwitch");
  headerSwitch.src = goodSwitch;

  let goodSwitchBall = document.createElement("div");

  if (goodOrBad === "bad") {
    goodSwitchBall.classList.add("goodSwitchBall", "pageSwitch");
  } else if (goodOrBad === "good") {
    goodSwitchBall.classList.add(
      "goodSwitchBall",
      "badSwitchBall",
      "pageSwitch"
    );
  }

  headerSwitchCon.appendChild(goodSwitchBall);
  headerSwitchCon.appendChild(headerSwitch);

  if (pageOrHeader === "page") {
    headerSwitchCon.classList.add("pageSwitchCon");
    headerSwitchCon.addEventListener("click", function () {
      if (goodOrBad === "bad") {
        goodSwitchBall.style.right = "calc(2vw + 24px)";
      } else {
        goodSwitchBall.style.right = "calc(2vw + 70px)";
      }
      setTimeout(() => {
        btnActiveded.goodOrBadPage(goodOrBad);
      }, 300);
    });
  } else if (pageOrHeader === "header") {
    headerSwitchCon.addEventListener("click", function () {
      if (goodOrBad === "bad") {
        goodSwitchBall.style.right = "calc(2vw + 24px)";
      } else {
        goodSwitchBall.style.right = "calc(2vw + 70px)";
      }
      setTimeout(() => {
        btnActiveded.goodOrBadHeader(goodOrBad);
      }, 300);
    });
  }
  return headerSwitchCon;
};

const textElCreater = {
  filler: function (height) {
    let el = document.createElement("div");
    el.style.height = height;
    return el;
  },
  normalText: function (text) {
    let el = document.createElement("span");
    el.classList.add("textNormal");
    el.textContent = text;

    return el;
  },
  header: function (text, size) {
    let el = document.createElement("span");
    el.style.fontWeight = "700";
    el.style.fontSize = size;
    el.textContent = text;

    return el;
  },
};

export { pageLoader, removeChildren, createSwitch, textElCreater };
