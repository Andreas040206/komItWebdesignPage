import { createSwitch, textElCreater } from "../pageCreator";
import flowchart from "../img/Flowchart.png";

const createFlowchartPage = function (goodOrBad) {
  return createGoodFlowchartPage();
};

const createGoodFlowchartPage = function () {
  const content = document.createElement("div");
  content.classList.add("flowchartPageCon");

  // Creating page parts
  let filler = document.createElement("div");

  // Part 1
  const part1Flowchart = document.createElement("div");
  part1Flowchart.classList.add("part1Flowchart", "pagePart");

  const part1MidContet = document.createElement("div");
  part1MidContet.classList.add("textCon");

  part1MidContet.appendChild(textElCreater.filler("50px"));

  part1MidContet.appendChild(textElCreater.header("Flowcharts", "50px"));
  part1MidContet.appendChild(
    textElCreater.normalText(
      "Can the user easily find what they are looking for? Is the page struktur and links placed logicly?"
    )
  );
  part1MidContet.appendChild(textElCreater.filler("20px"));
  part1MidContet.appendChild(
    textElCreater.normalText(
      "Here it can be helpfull to use a flowchart, to map your links and pages. Flowchart is a way to draw how the user kan switch between pages by clicks. It's an importent element in webdevelopment to create a comfortable user experience, so the user dosen't get lost."
    )
  );
  part1MidContet.appendChild(textElCreater.filler("30px"));
  part1MidContet.appendChild(textElCreater.header("Example", "40px"));
  part1MidContet.appendChild(
    textElCreater.normalText(
      "Here is a good example of how a webpage could be stuctured."
    )
  );
  let flowchartImg = new Image();
  flowchartImg.src = flowchart;
  flowchartImg.classList.add("flowchartImg");
  part1MidContet.appendChild(flowchartImg);
  part1MidContet.appendChild(textElCreater.filler("20px"));
  part1MidContet.appendChild(
    textElCreater.normalText(
      "You can make your own flowchart in many ways. One way it to use google drev drawings, to make boxes and arrows (Thats what we used to make the flowchart in the image). You could also draw it on paper if you wanted "
    )
  );

  part1Flowchart.appendChild(filler);
  part1Flowchart.appendChild(part1MidContet);
  part1Flowchart.appendChild(textElCreater.filler("0px"));

  //appening all parts
  content.appendChild(part1Flowchart);

  return content;
};

export { createFlowchartPage };
