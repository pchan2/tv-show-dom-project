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
const allEpisodesContainerEl = document.createElement("div");

// -- SEARCH INPUT --
const searchEl = document.getElementById("live-search");
bodyEl.appendChild(searchEl);

// container for all episode containers
bodyEl.appendChild(allEpisodesContainerEl);

// -- GET ALL EPISODES --
episodes.forEach((episode) => {
  // -- CREATE ELEMENTS --
  const anchorEl = document.createElement("a");
  const episodeContainerEl = document.createElement("div");
  const nameEl = document.createElement("p");
  const imageMediumEl = document.createElement("img");
  const summaryEl = document.createElement("p");
  const episodeCodeEl = document.createElement("p");

  // -- CREATE CLASSES --
  anchorEl.className = "anchor-name";
  episodeContainerEl.className = "episode-container";
  nameEl.className = "episode-name";
  episodeCodeEl.className = "episode-code";
  allEpisodesContainerEl.className = "all-episodes-container";

  anchorEl.href = episode.url;

  nameEl.textContent = episode.name;
  episodeCodeEl.textContent = `S0${episode.season}E0${episode.number}`;
  imageMediumEl.src = episode.image.medium;
  summaryEl.innerHTML = episode.summary;

  allEpisodesContainerEl.appendChild(episodeContainerEl);
  episodeContainerEl.appendChild(anchorEl);
  anchorEl.appendChild(nameEl);
  episodeContainerEl.appendChild(episodeCodeEl);
  episodeContainerEl.appendChild(imageMediumEl);
  episodeContainerEl.appendChild(summaryEl);

  nameEl.onmouseover = function() {
    this.style.backgroundColor = "#eceeee";
    this.style.border = "dotted 2px grey";
  }
  nameEl.onmouseout = function() {
    this.style.backgroundColor = "white";
    this.style.border = "dotted 2px #eceeee";
  }
});

// -- FOOTER --
const footerEl = document.querySelector("footer");
footerEl.innerHTML = "Data is from <a href=\"https://www.tvmaze.com\">TVMaze.com</a>";
bodyEl.appendChild(footerEl);

// -- LIVE SEARCH with "keyup" -- custom search filter 8:11 https://www.youtube.com/watch?v=3NG8zy0ywIk
// -- LIVE SEARCH with "fetch" -- Quick Autocomplete App With JS & JSON https://www.youtube.com/watch?v=1iysNUrI3lw
// -- LIVE SEARCH with "keyup" + "filter" -- https://www.youtube.com/watch?v=DzXmAKdEYIs
searchEl.addEventListener("keyup", function(e) {
  const term = e.target.value.toLowerCase();
  episodes.forEach(function(episode) {
    console.log(episode);
    if(nameEl.toLowerCase().includes(term) ||
    summaryEL.toLowerCase().includes(term)) {
      episode.style.display = "block";
    } else {
      episode.style.display = "none";
    }
  })
})
