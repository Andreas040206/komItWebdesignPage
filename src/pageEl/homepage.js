import { btnActiveded } from "../controller";
import { createSwitch } from "../pageCreator";
import { textElCreater } from "../pageCreator";

import switchWithArrowImgSrc from "../img/switchWithArrow.png";

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
  const content = document.createElement("div");

  const part1 = document.createElement("div");
  part1.classList.add("pagePart");

  const part1Text = document.createElement("div");
  part1Text.classList.add("textCon");

  // Appending textEl
  part1Text.appendChild(textElCreater.filler("80px"));
  part1Text.appendChild(
    textElCreater.header("How does this site work?", "50px")
  );
  part1Text.appendChild(textElCreater.filler("10px"));
  part1Text.appendChild(
    textElCreater.normalText(
      "This will be a short guide on how to use the site. (It's pretty simple)"
    )
  );
  part1Text.appendChild(textElCreater.filler("30px"));
  part1Text.appendChild(
    textElCreater.normalText(
      "(Almost) Every page has a good and a bad version. One that is made based on the prinicples you are reading about, and one that does the oposite. You can switch between both by cliking the large switch up in the corner. (As shown in the image below)"
    )
  );
  part1Text.appendChild(textElCreater.filler("30px"));

  const switchWithArrowImg = new Image();
  switchWithArrowImg.src = switchWithArrowImgSrc;
  switchWithArrowImg.classList.add("switchWithArrowImg");

  part1Text.appendChild(switchWithArrowImg);
  part1Text.appendChild(textElCreater.filler("50px"));
  part1Text.appendChild(
    textElCreater.normalText(
      "To find out more information about why something look ugly or good you can move you mouse over the grey dots. The dot will expand and show you why, and mabey have a link to a page were you can read more."
    )
  );
  part1Text.appendChild(textElCreater.filler("20px"));
  part1Text.appendChild(textElCreater.normalText("Check this out"));
  part1Text.appendChild(textElCreater.filler("30px"));
  part1Text.appendChild(
    textElCreater.normalText("What are you waiting for? Go explore.")
  );

  // Creating infoDots
  const infoDot4 = document.createElement("div");
  infoDot4.classList.add("infoDot", "infoDot4");

  let infoDot4Text = textElCreater.normalText(
    "WOOOAAW, this is amazing!",
    "",
    "white"
  );

  const infoDot4Content = document.createElement("div");
  infoDot4Content.classList.add("infoDotEl");

  infoDot4Content.appendChild(infoDot4Text);

  infoDot4.appendChild(infoDot4Content);

  // Appending children
  part1.appendChild(textElCreater.filler("0px"));
  part1.appendChild(part1Text);
  part1.appendChild(createSwitch("page", "good"));
  part1.appendChild(infoDot4);

  content.appendChild(part1);

  return content;
};

const createBadHomepage = function () {
  const content = document.createElement("div");
  content.classList.add("badHomepageCon");

  const part1 = document.createElement("div");
  part1.classList.add("pagePart");

  const part1Text = document.createElement("div");
  part1Text.classList.add("textCon");

  // Appending textEl
  part1Text.appendChild(textElCreater.filler("80px"));

  const headerText = textElCreater.header("How does this site work?", "50px");
  headerText.style.fontFamily = ` "Times New Roman", Times, serif`;

  part1Text.appendChild(headerText);
  part1Text.appendChild(textElCreater.filler("10px"));

  const shortGuideText = textElCreater.normalText(
    "This will be a short guide on how to use the site. (It's pretty simple)"
  );
  shortGuideText.style.color = "yellow";

  part1Text.appendChild(shortGuideText);
  part1Text.appendChild(textElCreater.filler("30px"));
  part1Text.appendChild(
    textElCreater.normalText(
      "(Almost) Every page has a good and a bad version. One that is made based on the prinicples you are reading about, and one that does the oposite. You can switch between both by cliking the large switch up in the corner. (As shown in the image below)"
    )
  );
  part1Text.appendChild(textElCreater.filler("30px"));

  const switchWithArrowImg = new Image();
  switchWithArrowImg.src = switchWithArrowImgSrc;
  switchWithArrowImg.classList.add("switchWithArrowImg");

  part1Text.appendChild(switchWithArrowImg);
  part1Text.appendChild(textElCreater.filler("50px"));

  const findMoreText = textElCreater.normalText(
    "To find out more information about why something look ugly or good you can move you mouse over the grey dots. The dot will expand and show you why, and mabey have a link to a page were you can read more."
  );

  findMoreText.classList.add("dislocatedText");

  part1Text.appendChild(findMoreText);
  part1Text.appendChild(textElCreater.filler("20px"));
  part1Text.appendChild(textElCreater.normalText("Check this out"));
  part1Text.appendChild(textElCreater.filler("30px"));
  part1Text.appendChild(
    textElCreater.normalText("What are you waiting for? Go explore.")
  );

  // Creating infoDots
  const infoDot4 = document.createElement("div");
  infoDot4.classList.add("infoDot", "infoDot4");

  let infoDot4Text = textElCreater.normalText(
    "WOOOAAW, this is amazing!",
    "",
    "white"
  );

  const infoDot4Content = document.createElement("div");
  infoDot4Content.classList.add("infoDotEl");

  infoDot4Content.appendChild(infoDot4Text);

  infoDot4.appendChild(infoDot4Content);

  // Appending children
  part1.appendChild(textElCreater.filler("0px"));
  part1.appendChild(part1Text);
  part1.appendChild(createSwitch("page", "bad"));
  part1.appendChild(infoDot4);

  content.appendChild(part1);

  return content;
};

export { createHomepage };
