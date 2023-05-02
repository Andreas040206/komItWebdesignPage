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

  const headerMidFill = document.createElement("div");
  headerMidFill.classList.add("headerMidFill");

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

  colorBtn.addEventListener("click", function () {
    btnActiveded.changepage("colorPage");
  });

  let fontsBtn = document.createElement("div");
  fontsBtn.classList.add("menuBtn");
  fontsBtn.textContent = "Font";

  fontsBtn.addEventListener("click", () => {
    btnActiveded.changepage("fontsPage");
  });

  let gestaltsLawsBtn = document.createElement("div");
  gestaltsLawsBtn.classList.add("menuBtn");
  gestaltsLawsBtn.textContent = "Gestalt";

  gestaltsLawsBtn.addEventListener("click", () => {
    btnActiveded.changepage("gestaltsPage");
  });

  let KissBtn = document.createElement("div");
  KissBtn.classList.add("menuBtn");
  KissBtn.textContent = "KISS";

  KissBtn.addEventListener("click", () => {
    btnActiveded.changepage("KISSPage");
  });

  let testingBtn = document.createElement("div");
  testingBtn.classList.add("menuBtn");
  testingBtn.textContent = "Testing";

  testingBtn.addEventListener("click", () => {
    btnActiveded.changepage("testingPage");
  });

  if (currentPage === "homePage") {
    homeBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "testingPage") {
    testingBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "flowchartPage") {
    flowchartBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "colorPage") {
    colorBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "KISSPage") {
    KissBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "testingPage") {
    testingBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "gestaltsPage") {
    gestaltsLawsBtn.classList.add("selectedMenuBtn");
  } else if (currentPage === "fontsPage") {
    fontsBtn.classList.add("selectedMenuBtn");
  }

  let allMenuBtn = [];

  allMenuBtn.push(
    homeBtn,
    testingBtn,
    KissBtn,
    gestaltsLawsBtn,
    fontsBtn,
    colorBtn,
    flowchartBtn
  );

  headerMidCon.appendChild(homeBtn);
  headerMidCon.appendChild(testingBtn);
  headerMidCon.appendChild(KissBtn);
  headerMidCon.appendChild(gestaltsLawsBtn);
  headerMidCon.appendChild(fontsBtn);
  headerMidCon.appendChild(colorBtn);
  headerMidCon.appendChild(flowchartBtn);

  headerMid.appendChild(headerMidFill);
  headerMid.appendChild(headerMidCon);

  // creating the lower part of the header
  const headerLower = document.createElement("div");
  headerLower.classList.add("headerLower");

  //creating small infoDots
  const infoDot1 = document.createElement("div");
  infoDot1.classList.add("infoDot", "infoDot1");

  let infoDot1Image = new Image();
  infoDot1Image.classList.add("infoDotImage");
  infoDot1Image.src = infoDot1Img;

  const infoDot1Content = document.createElement("div");
  infoDot1Content.classList.add("infoDotEl");

  infoDot1Content.appendChild(infoDot1Image);

  infoDot1.appendChild(infoDot1Content);

  el.appendChild(headerUpper);
  el.appendChild(headerMid);
  el.appendChild(headerLower);
  el.appendChild(infoDot1);

  return el;
};

const createBadHeaderEl = function (currentPage) {
  const el = document.createElement("div");
  el.classList.add("badHeaderCon", "headerCon");

  el.appendChild(createSwitch("header", "bad"));

  return el;
};

export { createHeaderElement };
