// experience data
const exp_data = [
  {
    period: "2016 - 2018",
    type: "diploma",
    title: "Technological University Degree, majoring in IT and picture processing",
    place: "IUT Arles, Aix-Marseille University, Arles France",
    descr: ""
  },
  {
    period: "April 2018 - August 2018",
    type: "internship",
    title: "Development of a calibration HMI app for Rafale and Mirage simulators",
    place: "DGA Essai en Vol, military base 125, Istres France",
    descr: "Study of an aircraft pilot and gunner controls. <br/> C++ QT."
  },
  {
    period: "2018 - 2021",
    type: "diploma",
    title: "IT Engineering Master’s degree, majoring in data-science",
    place: "Polytech Annecy, Savoie Mont-Blanc University, Annecy France",
    descr: "Data mining, data analysis, data-visualisation."
  },
  {
    period: "April 2019 - June 2019",
    type: "internship",
    title: "Studies and guidelines for a data governance in the Annecy's territorial community",
    place: "Annecy's Town Hall, Annecy France",
    descr: "Public and territorial data, territorial actors."
  },
  {
    period: "September 2020 - February 2021",
    type: "erasmus",
    title: "Research Master’s degree, « High performance computing & Big Data »",
    place: "Babeș-Bolyai University, Cluj-Napoca Romania",
    descr: "Big Data and IoT processing, machine learning."
  },
  {
    period: "April 2021 - August 2021",
    type: "internship",
    title: "Data-science and cloud computing applied to railway bearings's tests",
    place: "NTN-SNR Bearings, Annecy",
    descr: "Business data integration into GCP, data analysis and reporting."
  },
  {
    period: "November 2021 - March 2022",
    type: "full time contract",
    title: "Software engineer in public health and humanitarian",
    place: "Novel-T, Geneva",
    descr: "Geospatial and strategical public health planning."
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

  content.push("<h3>" + infos.period + "</h3> <p class='exp_type'>" + infos.type + "</p>");
  content.push("<h2>" + infos.title + "</h2>");
  content.push("<p class='place'><i>" + infos.place + "</i></p>");
  // content.push("<p>" + infos.descr + "</p>");
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
