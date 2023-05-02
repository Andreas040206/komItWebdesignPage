import { createSwitch, textElCreater } from "../pageCreator";
import leftMonoColorSrc from "../img/leftMonoColor.png";
import colorwheelSrc from "../img/Colorwheel.png";
import infoDot3Src from "../img/infoDot3.png";

const createColorPage = function (goodOrBad) {
  if (goodOrBad === "bad") {
    return createBadColorPage();
  } else {
    return createGoodColorPage();
  }
};

const createGoodColorPage = function () {
  const content = document.createElement("div");
  content.classList.add("goodColorPageCon");

  // creating part 1
  const part1ColorPage = document.createElement("div");
  part1ColorPage.classList.add("pagePart");

  const part1ColorPageTextCon = document.createElement("div");
  part1ColorPageTextCon.classList.add("textCon");

  part1ColorPageTextCon.appendChild(
    textElCreater.header("The theory of colors", "50px")
  );
  part1ColorPageTextCon.appendChild(
    textElCreater.normalText(
      "Color theory is an essential aspect of web design that can greatly impact the overall look and feel of a website. When choosing colors for a website, designers must consider the psychology of color, the color wheel, and the color scheme. "
    )
  );
  part1ColorPageTextCon.appendChild(textElCreater.filler("30px"));

  // Appending part 1 children

  part1ColorPage.appendChild(textElCreater.filler("0px"));
  part1ColorPage.appendChild(part1ColorPageTextCon);
  part1ColorPage.appendChild(createSwitch("page", "good"));

  // creating part 2

  const part2ColorPage = document.createElement("div");
  part2ColorPage.classList.add("pagePart");

  const part2ColorPageTextCon = document.createElement("div");
  part2ColorPageTextCon.classList.add("textCon");

  const monocolorText = textElCreater.normalText(
    "The psychology of color refers to how different colors can evoke emotions and moods in people. For example, warm colors such as red, orange, and yellow can create a sense of energy and excitement, while cool colors such as blue, green, and purple can create a calming and relaxing effect. Designers should consider the target audience and the message they want to convey when choosing colors for a website.",
    "",
    "white"
  );

  monocolorText.style.fontWeight = "700";

  part2ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part2ColorPageTextCon.appendChild(monocolorText);
  part2ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part2ColorPageTextCon.classList.add("monocolorCon");

  const leftMonoBg = new Image();
  leftMonoBg.src = leftMonoColorSrc;
  leftMonoBg.classList.add("leftMonoColor");

  // Appending part 2 children
  part2ColorPage.appendChild(leftMonoBg);
  part2ColorPage.appendChild(textElCreater.filler("0px"));
  part2ColorPage.appendChild(part2ColorPageTextCon);
  part2ColorPage.appendChild(textElCreater.smoothFiller("right", "#8f1100ff"));

  // creating part 3

  const part3ColorPage = document.createElement("div");
  part3ColorPage.classList.add("pagePart");
  part3ColorPage.style.marginTop = "50px";

  const part3ColorPageTextCon = document.createElement("div");
  part3ColorPageTextCon.classList.add("textCon");

  part3ColorPageTextCon.style.backgroundColor = "#ffe599ff";

  const conrastText = textElCreater.normalText(
    "The color wheel is a tool that designers use to select color combinations that work well together. The primary colors are red, blue, and yellow, and they can be combined to create secondary colors such as green, orange, and purple. Analogous colors are colors that are next to each other on the color wheel and can create a harmonious color scheme. Complementary colors are opposite each other on the color wheel and can create a striking contrast.",
    "",
    "#0b5394"
  );

  conrastText.style.fontWeight = "700";

  part3ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part3ColorPageTextCon.appendChild(conrastText);
  part3ColorPageTextCon.appendChild(textElCreater.filler("30px"));

  // Appending part 3 children
  part3ColorPage.appendChild(textElCreater.smoothFiller("left", "#ffe599ff"));
  part3ColorPage.appendChild(part3ColorPageTextCon);
  part3ColorPage.appendChild(textElCreater.bgWithColor("#ffe599ff"));

  // creating part 4
  const part4ColorPage = document.createElement("div");
  part4ColorPage.classList.add("pagePart");
  part4ColorPage.style.marginTop = "50px";

  part4ColorPage.appendChild(textElCreater.filler("0px"));
  const part4ColorPageTextCon = document.createElement("div");
  part4ColorPageTextCon.classList.add("textCon");
  part4ColorPageTextCon.appendChild(textElCreater.filler("20px"));
  part4ColorPageTextCon.appendChild(textElCreater.header("Colorwheel", "50px"));
  part4ColorPageTextCon.appendChild(textElCreater.filler("20px"));
  part4ColorPageTextCon.appendChild(
    textElCreater.normalText(
      "The color scheme refers to the overall color palette used in a website. Designers can choose from various color schemes, such as monochromatic, analogous, complementary, or triadic. A monochromatic color scheme uses different shades of the same color, while an analogous color scheme uses colors that are next to each other on the color wheel. A complementary color scheme uses colors that are opposite each other on the color wheel, and a triadic color scheme uses three colors that are evenly spaced on the color wheel."
    )
  );
  part4ColorPageTextCon.appendChild(textElCreater.filler("20px"));
  const colorwheelImg = new Image();
  colorwheelImg.src = colorwheelSrc;
  colorwheelImg.classList.add("colorwheelImg");

  const colorwheelImgCon = document.createElement("div");
  colorwheelImgCon.appendChild(colorwheelImg);
  colorwheelImgCon.classList.add("colorwheelImgCon");

  part4ColorPageTextCon.appendChild(colorwheelImgCon);

  part4ColorPage.appendChild(part4ColorPageTextCon);

  // creating part 5

  const part5ColorPage = document.createElement("div");
  part5ColorPage.classList.add("pagePart");
  part5ColorPage.style.marginTop = "50px";

  const part5ColorPageTextCon = document.createElement("div");
  part5ColorPageTextCon.classList.add("textCon");

  part5ColorPageTextCon.style.backgroundColor = "#1c4587ff";

  const blueWhiteText = textElCreater.normalText(
    "In conclusion, color theory plays a crucial role in web design, and designers must consider the psychology of color, the color wheel, and the color scheme when choosing colors for a website. By understanding these concepts, designers can create visually appealing websites that effectively convey the desired message to the target audience.",
    "",
    "white"
  );

  blueWhiteText.style.fontWeight = "700";

  part5ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part5ColorPageTextCon.appendChild(blueWhiteText);
  part5ColorPageTextCon.appendChild(textElCreater.filler("30px"));

  // Appending part 5 children
  part5ColorPage.appendChild(textElCreater.smoothFiller("left", "#1c4587ff"));
  part5ColorPage.appendChild(part5ColorPageTextCon);
  part5ColorPage.appendChild(textElCreater.bgWithColor("#1c4587ff"));

  // Creating all infoDots
  const infoDot3 = document.createElement("div");
  infoDot3.classList.add("infoDot", "infoDot3");

  let infoDot3Image = new Image();
  infoDot3Image.classList.add("infoDotImage");
  infoDot3Image.src = infoDot3Src;

  let infoDot3Text = textElCreater.normalText(
    "Here we have used monochrome colors in the background, this is of course just to illustrate as this doesnt't look particularly beutifull, if you would like to read more about colors just keep reading.",
    "",
    "white"
  );

  const infoDot3Content = document.createElement("div");
  infoDot3Content.classList.add("infoDotEl");

  infoDot3Content.appendChild(infoDot3Image);
  infoDot3Content.appendChild(infoDot3Text);

  infoDot3.appendChild(infoDot3Content);

  // Appending Content children;
  content.appendChild(part1ColorPage);
  content.appendChild(part2ColorPage);
  content.appendChild(part3ColorPage);
  content.appendChild(part4ColorPage);
  content.appendChild(part5ColorPage);
  content.appendChild(infoDot3);

  return content;
};

const createBadColorPage = function () {
  const content = document.createElement("div");
  content.classList.add("badColorPageCon");

  // creating part 1
  const part1ColorPage = document.createElement("div");
  part1ColorPage.classList.add("pagePart");

  const part1ColorPageTextCon = document.createElement("div");
  part1ColorPageTextCon.classList.add("textCon");

  part1ColorPageTextCon.appendChild(
    textElCreater.header("The theory of colors", "50px")
  );
  part1ColorPageTextCon.appendChild(
    textElCreater.normalText(
      "Color theory is an essential aspect of web design that can greatly impact the overall look and feel of a website. When choosing colors for a website, designers must consider the psychology of color, the color wheel, and the color scheme. ",
      "",
      "white"
    )
  );
  part1ColorPageTextCon.appendChild(textElCreater.filler("30px"));

  // Appending part 1 children

  part1ColorPage.appendChild(textElCreater.filler("0px"));
  part1ColorPage.appendChild(part1ColorPageTextCon);
  part1ColorPage.appendChild(createSwitch("page", "bad"));

  // creating part 2

  const part2ColorPage = document.createElement("div");
  part2ColorPage.classList.add("pagePart");

  const part2ColorPageTextCon = document.createElement("div");
  part2ColorPageTextCon.classList.add("textCon");

  const monocolorText = textElCreater.normalText(
    "The psychology of color refers to how different colors can evoke emotions and moods in people. For example, warm colors such as red, orange, and yellow can create a sense of energy and excitement, while cool colors such as blue, green, and purple can create a calming and relaxing effect. Designers should consider the target audience and the message they want to convey when choosing colors for a website.",
    "",
    "white"
  );

  monocolorText.style.fontWeight = "700";

  part2ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part2ColorPageTextCon.appendChild(monocolorText);
  part2ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part2ColorPageTextCon.classList.add("monocolorCon");

  const leftMonoBg = new Image();
  leftMonoBg.src = leftMonoColorSrc;
  leftMonoBg.classList.add("leftMonoColor");

  // Appending part 2 children
  part2ColorPage.appendChild(leftMonoBg);
  part2ColorPage.appendChild(textElCreater.filler("0px"));
  part2ColorPage.appendChild(part2ColorPageTextCon);
  part2ColorPage.appendChild(textElCreater.smoothFiller("right", "#8f1100ff"));

  // creating part 3

  const part3ColorPage = document.createElement("div");
  part3ColorPage.classList.add("pagePart");
  part3ColorPage.style.marginTop = "50px";

  const part3ColorPageTextCon = document.createElement("div");
  part3ColorPageTextCon.classList.add("textCon");

  part3ColorPageTextCon.style.backgroundColor = "rgb(70 67 255)";

  const conrastText = textElCreater.normalText(
    "The color wheel is a tool that designers use to select color combinations that work well together. The primary colors are red, blue, and yellow, and they can be combined to create secondary colors such as green, orange, and purple. Analogous colors are colors that are next to each other on the color wheel and can create a harmonious color scheme. Complementary colors are opposite each other on the color wheel and can create a striking contrast.",
    "",
    "#0b5394"
  );

  conrastText.style.fontWeight = "700";

  part3ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part3ColorPageTextCon.appendChild(conrastText);
  part3ColorPageTextCon.appendChild(textElCreater.filler("30px"));

  // Appending part 3 children
  part3ColorPage.appendChild(
    textElCreater.smoothFiller("left", "rgb(70 67 255)")
  );
  part3ColorPage.appendChild(part3ColorPageTextCon);
  part3ColorPage.appendChild(textElCreater.bgWithColor("rgb(70 67 255)"));

  // creating part 4
  const part4ColorPage = document.createElement("div");
  part4ColorPage.classList.add("pagePart");
  part4ColorPage.style.marginTop = "50px";

  part4ColorPage.appendChild(textElCreater.filler("0px"));
  const part4ColorPageTextCon = document.createElement("div");
  part4ColorPageTextCon.classList.add("textCon");
  part4ColorPageTextCon.appendChild(textElCreater.filler("20px"));

  let headerWithDifFont = textElCreater.header("Colorwheel", "50px", "green");
  headerWithDifFont.style.fontFamily = "'Times New Roman', Times, serif";
  part4ColorPageTextCon.appendChild(headerWithDifFont);
  part4ColorPageTextCon.appendChild(textElCreater.filler("20px"));
  part4ColorPageTextCon.appendChild(
    textElCreater.normalText(
      "The color scheme refers to the overall color palette used in a website. Designers can choose from various color schemes, such as monochromatic, analogous, complementary, or triadic. A monochromatic color scheme uses different shades of the same color, while an analogous color scheme uses colors that are next to each other on the color wheel. A complementary color scheme uses colors that are opposite each other on the color wheel, and a triadic color scheme uses three colors that are evenly spaced on the color wheel.",
      "",
      "green"
    )
  );
  part4ColorPageTextCon.appendChild(textElCreater.filler("20px"));
  const colorwheelImg = new Image();
  colorwheelImg.src = colorwheelSrc;
  colorwheelImg.classList.add("colorwheelImg");

  const colorwheelImgCon = document.createElement("div");
  colorwheelImgCon.appendChild(colorwheelImg);
  colorwheelImgCon.classList.add("colorwheelImgCon");

  part4ColorPageTextCon.appendChild(colorwheelImgCon);

  part4ColorPage.appendChild(part4ColorPageTextCon);

  // creating part 5

  const part5ColorPage = document.createElement("div");
  part5ColorPage.classList.add("pagePart");
  part5ColorPage.style.marginTop = "50px";

  const part5ColorPageTextCon = document.createElement("div");
  part5ColorPageTextCon.classList.add("textCon");

  part5ColorPageTextCon.style.backgroundColor = "rgb(92 255 105)";

  const blueWhiteText = textElCreater.normalText(
    "In conclusion, color theory plays a crucial role in web design, and designers must consider the psychology of color, the color wheel, and the color scheme when choosing colors for a website. By understanding these concepts, designers can create visually appealing websites that effectively convey the desired message to the target audience.",
    "",
    "#daf1db"
  );

  blueWhiteText.style.fontWeight = "700";

  part5ColorPageTextCon.appendChild(textElCreater.filler("30px"));
  part5ColorPageTextCon.appendChild(blueWhiteText);
  part5ColorPageTextCon.appendChild(textElCreater.filler("30px"));

  // Appending part 3 children
  part5ColorPage.appendChild(
    textElCreater.smoothFiller("left", "rgb(92 255 105)")
  );
  part5ColorPage.appendChild(part5ColorPageTextCon);
  part5ColorPage.appendChild(textElCreater.bgWithColor("rgb(92 255 105)"));

  // Creating all infoDots

  // Appending Content children;
  content.appendChild(part1ColorPage);
  content.appendChild(part2ColorPage);
  content.appendChild(part3ColorPage);
  content.appendChild(part4ColorPage);
  content.appendChild(part5ColorPage);

  return content;
};

export { createColorPage };
