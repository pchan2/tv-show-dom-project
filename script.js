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

//https://www.youtube.com/watch?v=kTYRFuJv-gA

const episodes = getAllEpisodes();
const bodyEl = document.querySelector("body");

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

  bodyEl.appendChild(anchorEl);
  anchorEl.appendChild(containerEl);
  containerEl.appendChild(nameEl);
  containerEl.appendChild(episodeCode);
  containerEl.appendChild(imageMediumEl);
  containerEl.appendChild(summaryEl);
});

// footer
const footerEl = document.createElement("footer");
footerEl.innerHTML = "Data is from <a href=\"https://www.tvmaze.com\">TVMaze.com</a>";
bodyEl.appendChild(footerEl);