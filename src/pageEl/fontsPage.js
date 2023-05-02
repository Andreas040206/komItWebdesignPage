const createFontsPage = (goodOrBad) => {
  if (goodOrBad === "good") {
    return createGoodFontsPage();
  } else {
    return createBadFontsPage();
  }
};

const createGoodFontsPage = () => {
  const content = document.createElement("div");
  content.classList.add("fontsPageCon");

  return content;
};

const createBadFontsPage = () => {
  const content = document.createElement("div");
  content.classList.add("fontsPageCon");

  return content;
};

export { createFontsPage };
