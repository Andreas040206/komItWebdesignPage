import { pageLoader } from "./pageCreator.js";

let theCurrentPage = "homePage";

let goodOrBadHeader = "good";
let goodOrBadPage = "good";

pageLoader(theCurrentPage, goodOrBadHeader, goodOrBadPage);

const btnActiveded = {
  changepage: {},
  header: {},
  homepage: {},
};

export default btnActiveded;
export { goodOrBadPage, goodOrBadHeader };
