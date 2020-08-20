//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

window.onload = setup;

const episode = getOneEpisode();

const bodyEl = document.querySelector("body");
const containerEl = document.createElement("div");
const nameEl = document.createElement("p");
const seasonEl = document.createElement("p");
const numberEl = document.createElement("p");
const imageMediumEl = document.createElement("img");
const summaryEl = document.createElement("p");

nameEl.textContent = episode.name;
seasonEl.textContent = episode.season;
numberEl.textContent = episode.number;
imageMediumEl.src = episode.image.medium;
summaryEl.innerHTML = episode.summary;

bodyEl.appendChild(containerEl);
containerEl.appendChild(nameEl);
containerEl.appendChild(seasonEl);
containerEl.appendChild(numberEl);
containerEl.appendChild(imageMediumEl);
containerEl.appendChild(summaryEl);