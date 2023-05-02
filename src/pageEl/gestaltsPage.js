const createGestaltsPage = (goodOrBad) => {
  if (goodOrBad === "good") {
    return createGoodGestaltsPage();
  } else {
    return createBadGestaltsPage();
  }
};

const createGoodGestaltsPage = () => {
  const content = document.createElement("div");
  content.classList.add("fontsPageCon");

  return content;
};

const createBadGestaltsPage = () => {
  const content = document.createElement("div");
  content.classList.add("fontsPageCon");

  return content;
};

export { createGestaltsPage };
