import { pageLoader, removeChildren } from "./pageCreator";

let theCurrentPage = "homePage";

let goodOrBadHeader = "good";
let goodOrBadPage = "good";

function startPage() {
  pageLoader(theCurrentPage, goodOrBadHeader, goodOrBadPage);
}

const btnActiveded = {
  changepage: function (pageName) {
    theCurrentPage = pageName;
    removeChildren(document.body);
    startPage();
  },
  goodOrBadHeader: function (goodOrBad) {
    goodOrBadHeader = goodOrBad;
    removeChildren(document.body);
    startPage();
  },
  homepage: {},
  goodOrBadPage: function (goodOrBad) {
    goodOrBadPage = goodOrBad;
    removeChildren(document.body);
    startPage();
  },
};

export { btnActiveded, startPage };
