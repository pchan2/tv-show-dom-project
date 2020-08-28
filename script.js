//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  allEpisodesContainerEl.innerHTML = "";

  // -- GET ALL EPISODES -- access array using forEach https://www.youtube.com/watch?v=kTYRFuJv-gA
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

    // -- GIVE ELEMENTS VALUE --
    anchorEl.href = episode.url;
    nameEl.textContent = episode.name;
    imageMediumEl.src = episode.image.medium;
    summaryEl.innerHTML = episode.summary;

    if(episode.number >= 10) {
      episodeCodeEl.textContent = `S0${episode.season}E${episode.number}`;
    } else {
      episodeCodeEl.textContent = `S0${episode.season}E0${episode.number}`;
    }

    // -- APPEND ELEMENTS --
    allEpisodesContainerEl.appendChild(episodeContainerEl);
    episodeContainerEl.appendChild(anchorEl);
    anchorEl.appendChild(nameEl);
    episodeContainerEl.appendChild(episodeCodeEl);
    episodeContainerEl.appendChild(imageMediumEl);
    episodeContainerEl.appendChild(summaryEl);
  });
}

window.onload = setup;

const episodes = getAllEpisodes();
const bodyEl = document.querySelector("body");
const allEpisodesContainerEl = document.createElement("div");

// -- SEARCH INPUT --
const searchEl = document.getElementById("live-search");
bodyEl.appendChild(searchEl);

// container for all episode containers
bodyEl.appendChild(allEpisodesContainerEl);

// -- FOOTER --
const footerEl = document.querySelector("footer");
bodyEl.appendChild(footerEl);

// -- LIVE SEARCH RESOURCES -- see README.md file

searchEl.addEventListener("keyup", function(e) {

  let episodes = [];
  let searchValue = e.target.value.toLowerCase();
  const allEpisodes = getAllEpisodes();

  if(searchValue === null) {
    episodes = allEpisodes;
  } else {
    episodes = allEpisodes.filter(episode => (
      episode.name.toLowerCase().includes(searchValue) ||
      episode.summary.toLowerCase().includes(searchValue)
      )
    );
  }

  makePageForEpisodes(episodes);
});

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