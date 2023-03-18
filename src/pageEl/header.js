const createHeaderElement = function (currentPage, goodOrBad) {
  const headerEl = document.createElement("div");

  if (goodOrBad === "bad") {
    headerEl.appendChild(createBadHeaderEl(currentPage));
  } else {
    headerEl.appendChild(createGoodHeaderEl(currentPage));
  }

  return headerEl;
};

const createGoodHeaderEl = function (currentPage) {
  const el = document.createElement("div");
  el.classList.add("goodHeaderCon", "headerCon");

  const logoWithText = document.createElement("div");

  return el;
};

const createBadHeaderEl = function (currentPage) {
  const el = document.createElement("div");
  el.classList.add("badHeaderCon");

  return el;
};

export { createHeaderElement };
