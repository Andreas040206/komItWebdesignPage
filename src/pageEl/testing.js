import { textElCreater } from "../pageCreator";

const createTestingPage = () => {
  const content = document.createElement("div");
  content.classList.add("pagePart");

  const part1 = document.createElement("div");
  part1.classList.add("textCon");

  part1.appendChild(textElCreater.filler("80px"));
  part1.appendChild(textElCreater.header("UX Design Testing", "50px"));
  part1.appendChild(textElCreater.filler("10px"));
  part1.appendChild(
    textElCreater.normalText(
      "Website user experience design testing is a crucial part of the web development process. It involves testing a website's user interface, usability, and overall user experience to ensure that it is user-friendly and meets the needs of its target audience. The goal of user experience design testing is to identify any usability issues, understand user behavior, and improve the overall user experience."
    )
  );
  part1.appendChild(textElCreater.filler("30px"));
  part1.appendChild(
    textElCreater.normalText(
      "There are various methods of testing user experience design, including user testing, A/B testing, and usability testing. User testing involves having real users interact with the website and providing feedback on their experience. This feedback can include their thoughts on the website's layout, design, functionality, and ease of use. A/B testing involves testing two different versions of the website to determine which one provides a better user experience. Usability testing involves testing the website's usability by having users complete specific tasks and identifying any issues they encounter."
    )
  );
  part1.appendChild(textElCreater.filler("30px"));
  part1.appendChild(
    textElCreater.normalText(
      "One of the key benefits of website user experience design testing is that it helps to identify usability issues before the website is launched. By testing the website with real users, web developers can identify and fix any issues before the website goes live. This can save time and money in the long run, as fixing issues after the website is launched can be costly and time-consuming."
    )
  );
  part1.appendChild(textElCreater.filler("30px"));
  part1.appendChild(
    textElCreater.normalText(
      "Website user experience design testing also helps to ensure that the website meets the needs of its target audience. By understanding user behavior and preferences, web developers can design a website that is easy to use and meets the needs of its target audience. This can help to increase user engagement and improve the overall user experience."
    )
  );
  part1.appendChild(textElCreater.filler("30px"));
  part1.appendChild(
    textElCreater.normalText(
      "Therefore website user experience design testing is an essential part of the web development process. It helps to identify usability issues, understand user behavior, and improve the overall user experience. By testing the website with real users and using various testing methods, web developers can design a website that is user-friendly, meets the needs of its target audience, and provides a positive user experience."
    )
  );

  content.appendChild(textElCreater.filler("0px"));
  content.appendChild(part1);

  return content;
};

export { createTestingPage };
