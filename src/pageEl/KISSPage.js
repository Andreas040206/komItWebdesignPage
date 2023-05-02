const createKISSPage = (goodOrBad) => {
  if (goodOrBad === "good") {
    return createGoodKISSPage();
  } else {
    return createBadKISSPage();
  }
};

const createGoodKISSPage = () => {
  const content = document.createElement("div");
  content.classList.add("fontsPageCon");

  return content;
};

const createBadKISSPage = () => {
  const content = document.createElement("div");
  content.classList.add("fontsPageCon");

  return content;
};

export { createKISSPage };
