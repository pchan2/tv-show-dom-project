//You can edit ALL of the code here
/*function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;*/

/* -- GET ONE EPISODE --
const episode = getOneEpisode();

const bodyEl = document.querySelector("body");
const anchorEl = document.createElement("a");
const containerEl = document.createElement("div");
const nameEl = document.createElement("p");
const imageMediumEl = document.createElement("img");
const summaryEl = document.createElement("p");
const episodeCode = document.createElement("p");

anchorEl.href = episode.url;
anchorEl.style.textDecoration = "none";
nameEl.textContent = episode.name;
episodeCode.textContent = `S0${episode.season}E0${episode.number}`;
imageMediumEl.src = episode.image.medium;
summaryEl.innerHTML = episode.summary;

bodyEl.appendChild(anchorEl);
anchorEl.appendChild(containerEl);
containerEl.appendChild(nameEl);
containerEl.appendChild(episodeCode);
containerEl.appendChild(imageMediumEl);
containerEl.appendChild(summaryEl);
*/

//access array using forEach https://www.youtube.com/watch?v=kTYRFuJv-gA
const episodes = getAllEpisodes();
const bodyEl = document.querySelector("body");
const outerContainerEl = document.createElement("div");

// search input
const searchEl = document.createElement("input");
bodyEl.appendChild(searchEl);
searchEl.placeholder = "Search episodes";
searchEl.style.padding = ".8rem";
searchEl.style.margin = "1rem";
searchEl.style.border = "solid 2px grey";
searchEl.style.borderRadius = "10px";
searchEl.style.width = "17rem";

// container for all episode containers
bodyEl.appendChild(outerContainerEl);

// -- GET ALL EPISODES --
episodes.forEach((episode) => {
  const anchorEl = document.createElement("a");
  const containerEl = document.createElement("div");
  const nameEl = document.createElement("p");
  const imageMediumEl = document.createElement("img");
  const summaryEl = document.createElement("p");
  const episodeCode = document.createElement("p");

  anchorEl.href = episode.url;
  anchorEl.style.textDecoration = "none";
  nameEl.textContent = episode.name;
  episodeCode.textContent = `S0${episode.season}E0${episode.number}`;
  imageMediumEl.src = episode.image.medium;
  summaryEl.innerHTML = episode.summary;

  outerContainerEl.appendChild(containerEl);
  containerEl.appendChild(anchorEl);
  anchorEl.appendChild(nameEl);
  containerEl.appendChild(episodeCode);
  containerEl.appendChild(imageMediumEl);
  containerEl.appendChild(summaryEl);

  containerEl.style.border = "solid 1px grey";
  containerEl.style.borderRadius = "10px";
  containerEl.style.margin = "1rem";
  containerEl.style.padding = "1rem";
  containerEl.style.paddingTop = "0";
  containerEl.style.paddingBottom = "0";
  containerEl.style.width = "16rem";
  containerEl.style.fontSize = ".8rem";

  nameEl.style.border = "dotted 3px white";
  nameEl.style.borderRadius = "10px";
  nameEl.style.padding = "1rem";
  nameEl.style.fontSize = "1.2rem";
  nameEl.style.textAlign = "center";
  nameEl.style.backgroundColor = "#eceeee";
});

bodyEl.style.width = "100vw"; // BUG: the elements go off screen
bodyEl.style.fontFamily = "Arial";
bodyEl.style.fontSize = ".8rem";
outerContainerEl.style.display = "flex";
outerContainerEl.style.width ="100%";

// footer
const footerEl = document.createElement("footer");
footerEl.innerHTML = "Data is from <a href=\"https://www.tvmaze.com\">TVMaze.com</a>";
bodyEl.appendChild(footerEl);