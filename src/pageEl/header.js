import { btnActiveded } from "../controller";
import { removeChildren, createSwitch } from "../pageCreator";
import infoDot1Img from "../img/infoDot1.png";

const createHeaderElement = function (currentPage, goodOrBad) {
  if (goodOrBad === "bad") {
    return createBadHeaderEl(currentPage);
  } else {
    return createGoodHeaderEl(currentPage);
  }
};

const createGoodHeaderEl = function (currentPage) {
  const el = document.createElement("div");
  el.classList.add("goodHeaderCon", "headerCon");

  // creating the upper part of the header
  const headerUpper = document.createElement("div");
  headerUpper.classList.add("headerUpper");

  const logoWithText = document.createElement("div");
  logoWithText.classList.add("logoWithTextCon");

  logoWithText.addEventListener("click", function () {
    btnActiveded.changepage("homePage");
  });

  let logoHeader = document.createElement("div");
  logoHeader.classList.add("logoHeader");
  logoHeader.textContent = "Webdesign";

  let logoText = document.createElement("div");
  logoText.classList.add("logoText");
  logoText.textContent = "- How it should be done";

  logoWithText.appendChild(logoHeader);
  logoWithText.appendChild(logoText);

  headerUpper.appendChild(logoWithText);
  headerUpper.appendChild(createSwitch("header", "good"));

  // creating the mid part of the header
  const headerMid = document.createElement("div");
  headerMid.classList.add("headerMid");

  const headerMidCon = document.createElement("div");
  headerMidCon.classList.add("headerMidCon");

  let homeBtn = document.createElement("div");
  homeBtn.classList.add("menuBtn");
  homeBtn.textContent = "Home";

  homeBtn.addEventListener("click", function () {
    btnActiveded.changepage("homePage");
  });

  let flowchartBtn = document.createElement("div");
  flowchartBtn.classList.add("menuBtn");
  flowchartBtn.textContent = "Flowchart";

  flowchartBtn.addEventListener("click", function () {
    btnActiveded.changepage("flowchartPage");
  });

  let colorBtn = document.createElement("div");
  colorBtn.classList.add("menuBtn");
  colorBtn.textContent = "Color";

  let textBtn = document.createElement("div");
  textBtn.classList.add("menuBtn");
  textBtn.textContent = "Text";

  let gestaltsLawsBtn = document.createElement("div");
  gestaltsLawsBtn.classList.add("menuBtn");
  gestaltsLawsBtn.textContent = "Gestalts principles";

  let layoutBtn = document.createElement("div");
  layoutBtn.classList.add("menuBtn");
  layoutBtn.textContent = "Layout";

  let KissBtn = document.createElement("div");
  KissBtn.classList.add("menuBtn");
  KissBtn.textContent = "KISS";

  let usabilityBtn = document.createElement("div");
  usabilityBtn.classList.add("menuBtn");
  usabilityBtn.textContent = "Usability";

  let testingBtn = document.createElement("div");
  testingBtn.classList.add("menuBtn");
  testingBtn.textContent = "Testing";

  testingBtn.addEventListener("click", function () {
    btnActiveded.changepage("testingPage");
  });

  if (currentPage === "homePage") {
    homeBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "testingPage") {
    testingBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "flowchartPage") {
    flowchartBtn.classList.add("selectedMenuBtn");
  }
  headerMidCon.appendChild(homeBtn);
  headerMidCon.appendChild(testingBtn);
  headerMidCon.appendChild(usabilityBtn);
  headerMidCon.appendChild(KissBtn);
  headerMidCon.appendChild(layoutBtn);
  headerMidCon.appendChild(gestaltsLawsBtn);
  headerMidCon.appendChild(textBtn);
  headerMidCon.appendChild(colorBtn);
  headerMidCon.appendChild(flowchartBtn);

  headerMid.appendChild(headerMidCon);

  // creating the lower part of the header
  const headerLower = document.createElement("div");
  headerLower.classList.add("headerLower");

  //creating small infoDots
  const infoDot1 = document.createElement("div");
  infoDot1.classList.add("infoDot", "infoDot1");
  let infoDot1Image = new Image();
  infoDot1Image.classList.add("infoDot1Image");
  infoDot1Image.src = infoDot1Img;
  infoDot1.appendChild(infoDot1Image);

  infoDot1.addEventListener("mouseenter", function () {});

  infoDot1.addEventListener("mouseleave", function () {});

  const infoDot2 = document.createElement("div");
  infoDot2.classList.add("infoDot", "infoDot2");

  infoDot2.addEventListener("mouseenter", function () {
    if (infoDot2.childNodes.length === 0) {
      let el = document.createElement("div");
      el.classList.add("infoCon");

      console.log("mouseover");

      infoDot2.appendChild(el);
    }
  });

  infoDot2.addEventListener("mouseleave", function () {
    removeChildren(infoDot2);
    console.log("mouseleft");
  });

  el.appendChild(headerUpper);
  el.appendChild(headerMid);
  el.appendChild(headerLower);
  el.appendChild(infoDot1);
  el.appendChild(infoDot2);

  return el;
};

const createBadHeaderEl = function (currentPage) {
  const el = document.createElement("div");
  el.classList.add("badHeaderCon", "headerCon");

  el.appendChild(createSwitch("header", "bad"));

  return el;
};

export { createHeaderElement };
