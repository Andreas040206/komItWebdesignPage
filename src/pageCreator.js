import { first } from "lodash";
import { createHeaderElement } from "./pageEl/header";
import { createHomepage } from "./pageEl/homepage";
import { createFlowchartPage } from "./pageEl/flowchart";
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
