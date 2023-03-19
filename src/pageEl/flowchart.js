import { createSwitch, textElCreater } from "../pageCreator";

const createFlowchartPage = function (goodOrBad) {
  if (goodOrBad === "bad") {
    return createBadFlowchartPage();
  } else {
    return createGoodFlowchartPage();
  }
};

const createGoodFlowchartPage = function () {
  const content = document.createElement("div");
  content.classList.add("flowchartPageCon");

  // Creating page parts
  let filler = document.createElement("div");

  // Part 1
  const part1Flowchart = document.createElement("div");
  part1Flowchart.classList.add("part1Flowchart", "FlowchartPart");

  const part1MidContet = document.createElement("div");
  part1MidContet.classList.add("part1MidContet");

  part1MidContet.appendChild(textElCreater.header("Flowcharts", "50px"));
  part1MidContet.appendChild(
    textElCreater.normalText(
      "Kan brugerne finde de oplysninger, de gerne vil, og er sitet overskueligt og hensigtsmæssigt i forhold til formålet?"
    )
  );
  part1MidContet.appendChild(textElCreater.filler("20px"));
  part1MidContet.appendChild(
    textElCreater.normalText(
      "Her kan et flowchart være brugbart. Et flowchart er en tegning over de primære sider i en form for webløsning. Flowchart viser, hvordan brugerne kan bevæge sig rundt mellem siderne og er et vigtigt element i udviklingen af prototypen."
    )
  );
  part1MidContet.appendChild(textElCreater.filler("30px"));
  part1MidContet.appendChild(
    textElCreater.header("Make your own flowchart", "40px")
  );
  part1MidContet.appendChild(
    textElCreater.normalText(
      "Try making your own flowchart, with our simulator."
    )
  );

  part1Flowchart.appendChild(filler);
  part1Flowchart.appendChild(part1MidContet);
  part1Flowchart.appendChild(createSwitch("page", "bad"));

  //appening all parts
  content.appendChild(part1Flowchart);
  content.appendChild(createFlowchartTemplate());

  return content;
};

const createBadFlowchartPage = function () {
  const content = document.createElement("div");
  content.classList.add("flowchartPageCon");

  // Creating page parts
  let filler = document.createElement("div");

  // Part 1
  const part1Flowchart = document.createElement("div");
  part1Flowchart.classList.add("part1Flowchart", "FlowchartPart");

  const part1MidContet = document.createElement("div");
  part1MidContet.classList.add();

  part1Flowchart.appendChild(filler);
  part1Flowchart.appendChild(part1MidContet);
  part1Flowchart.appendChild(createSwitch("page", "good"));

  //appening all parts
  content.appendChild(part1Flowchart);

  return content;
};

const createFlowchartTemplate = function (goodOrBad) {
  const Flowchart = document.createElement("div");
  Flowchart.classList.add("FlowchartCon");

  return Flowchart;
};

export { createFlowchartPage };
