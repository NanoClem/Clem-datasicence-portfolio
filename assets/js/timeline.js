// experience data
const exp_data = [
  {
    period: "November 2021 - March 2022",
    title: "Technological University Degree",
    place: "IUT Arles, Aix-Marseille University",
    descr: "Majoring in IT and picture processing"
  },
  {
    period: "March 2021 - August 2021",
    title: "IT Engineering Master’s degree, majoring in data-science",
    place: "Polytech Annecy, Savoie Mont-Blanc University",
    descr: "Data mining, data analysis, data-visualisation"
  },
  {
    period: "April 2019 - June 2029",
    title: "Research Master’s degree, « High performance computing & Big Data »",
    place: "Babeș-Bolyai University, Cluj-Napoca",
    descr: "Big Data and IoT processing, machine learning"
  },
  {
    period: "April 2018 - June 2018",
    title: "Research Master’s degree, « High performance computing & Big Data »",
    place: "Babeș-Bolyai University, Cluj-Napoca",
    descr: "Big Data and IoT processing, machine learning"
  },
  {
    period: "April 2018 - June 2018",
    title: "Research Master’s degree, « High performance computing & Big Data »",
    place: "Babeș-Bolyai University, Cluj-Napoca",
    descr: "Big Data and IoT processing, machine learning"
  },
  {
    period: "April 2018 - June 2018",
    title: "Research Master’s degree, « High performance computing & Big Data »",
    place: "Babeș-Bolyai University, Cluj-Napoca",
    descr: "Big Data and IoT processing, machine learning"
  }
];

//generate event/cards on the timeline
addCard(exp_data.length, exp_data);

function addCard(n, data) {
  for (let i = 0; i < n; i++) {
    timelineAddCard(data[i]);
  }

  const newNav = document.createElement("div");
  newNav.className = "timeline-nav-button";
  newNav.style.left = "0";
  newNav.style.marginLeft = "75px";
  document.getElementsByClassName("timeline-nav")[0].appendChild(newNav);

  const newNav2 = document.createElement("div");
  newNav2.className = "timeline-nav-button";
  newNav2.style.right = "0";
  newNav2.style.marginRight = "75px";
  newNav2.style.transform = "rotate(180deg) translate(-50%, 50%)";
  document.getElementsByClassName("timeline-nav")[0].appendChild(newNav2);
}

function timelineAddCard(infos) {
  let content = [];
  const container = document.getElementsByClassName("timeline-container")[0];

  content.push("<h3>" + infos.period + "</h3>");
  content.push("<h2>" + infos.title + "</h2>");
  content.push(
    "<p>" + infos.descr + "</p>"
  );
  content = content.join("");

  const newCard = document.createElement("div");
  newCard.className = "timeline-card";
  newCard.innerHTML = content;
  container.appendChild(newCard);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("class", "timeline-card-svg");
  svg.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:xlink",
    "http://www.w3.org/1999/xlink"
  );

  path.setAttribute(
    "d",
    "M5 15h3v21H5V15zm1.5-2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
  );
  path.setAttribute("fill", "black");

  svg.appendChild(path);
  newCard.appendChild(svg);
}

// Navigation

let startPos = 30;
let pos = startPos;
let posJump = 230 * 2;

initNav();
function initNav() {
  document.getElementsByClassName("timeline-container")[0].style.transform =
    "translate3d(" + pos + "px, " + 0 + "px, 0)";
}

let inputs = document.querySelectorAll(".timeline-nav-button");
inputs.forEach(function (e) {
  e.addEventListener("click", navMove);
});

function navMove(event) {
  let dir = Array.from(inputs).indexOf(event.target);
  pos += dir > 0 ? posJump * -1 : posJump;

  const container = document.getElementsByClassName("timeline-container")[0];

  container.style.transform = "translate3d(" + pos + "px, " + 0 + "px, 0)";
}