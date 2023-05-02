import { first } from "lodash";
import { createHeaderElement } from "./pageEl/header";
import { createHomepage } from "./pageEl/homepage";
import { createFlowchartPage } from "./pageEl/flowchart";
import { createColorPage } from "./pageEl/colorPage";
import { btnActiveded } from "./controller";
import { createFontsPage } from "./pageEl/fontsPage";
import { createGestaltsPage } from "./pageEl/gestaltsPage";
import { createTestingPage } from "./pageEl/testing";
import { createKISSPage } from "./pageEl/KISSPage";

const pageLoader = function (currentPage, goodOrBadHeader, goodOrBadPage) {
  const entirePage = document.createElement("div");

  entirePage.appendChild(createHeaderElement(currentPage, goodOrBadHeader));

  // first we check what page we are on
  if (currentPage === "homePage") {
    entirePage.appendChild(createHomepage(goodOrBadPage));
  } else if (currentPage === "flowchartPage") {
    entirePage.appendChild(createFlowchartPage());
  } else if (currentPage === "colorPage") {
    entirePage.appendChild(createColorPage(goodOrBadPage));
  } else if (currentPage === "fontsPage") {
    entirePage.appendChild(createFontsPage(goodOrBadPage));
  } else if (currentPage === "gestaltsPage") {
    entirePage.appendChild(createGestaltsPage(goodOrBadPage));
  } else if (currentPage === "testingPage") {
    entirePage.appendChild(createTestingPage());
  } else if (currentPage === "KISSPage") {
    entirePage.appendChild(createKISSPage());
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
  headerSwitchCon.classList.add("switchCon");

  let ball = document.createElement("div");
  ball.classList.add("switchBall");

  let switchBorder = document.createElement("div");
  switchBorder.classList.add("switchBorder");

  headerSwitchCon.appendChild(switchBorder);
  headerSwitchCon.appendChild(ball);

  if (goodOrBad === "bad") {
    ball.classList.add("badSwitchBall");
    headerSwitchCon.addEventListener("click", function () {
      ball.style.right = "70px";
      setTimeout(() => {
        if (pageOrHeader === "page") {
          btnActiveded.goodOrBadPage("good");
          console.log("page turn good");
        } else {
          btnActiveded.goodOrBadHeader("good");
          console.log("header turn good");
        }
      }, 300);
    });
  } else {
    headerSwitchCon.addEventListener("click", function () {
      ball.style.right = "22px";
      setTimeout(() => {
        if (pageOrHeader === "page") {
          btnActiveded.goodOrBadPage("bad");
          console.log("page turn bad");
        } else {
          btnActiveded.goodOrBadHeader("bad");
          console.log("header turn bad");
        }
      }, 300);
    });
  }
  if (pageOrHeader === "page") {
    headerSwitchCon.classList.add("pageSwitchCon");
  }

  return headerSwitchCon;
};

const textElCreater = {
  filler: function (height, bgColor) {
    let el = document.createElement("div");
    el.style.height = height;

    if (bgColor === isNaN) {
    } else {
      el.style.backgroundColor = bgColor;
    }
    return el;
  },
  smoothFiller: function (rightOrLeft, color) {
    let el = document.createElement("div");
    el.classList.add("smoothCon");
    if (rightOrLeft === "right") {
      el.classList.add("smoothRightConSide");
    } else {
      el.classList.add("smoothLeftConSide");
    }
    el.style.backgroundColor = color;

    return el;
  },
  normalText: function (text, bgColor, color) {
    let el = document.createElement("span");
    el.classList.add("textNormal");
    el.textContent = text;

    if (bgColor === isNaN || bgColor === "") {
    } else {
      el.style.backgroundColor = bgColor;
    }

    if (color === isNaN) {
    } else {
      el.style.color = color;
    }
    return el;
  },
  header: function (text, size, color) {
    let el = document.createElement("span");
    el.style.fontWeight = "700";
    el.style.fontSize = size;
    el.textContent = text;

    if (color === isNaN) {
    } else {
      el.style.color = color;
    }

    return el;
  },
  bgWithColor: function (color) {
    let el = document.createElement("div");
    el.classList.add("bgColorEl");
    el.style.backgroundColor = color;

    return el;
  },
};

export { pageLoader, removeChildren, createSwitch, textElCreater };
