//You can edit ALL of the code here
function setup(allEpisodes) {
  const numberOfEpisodes = allEpisodes.length;
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Displaying ${episodeList.length} / ${allEpisodes.length} episode(s)`;
  allEpisodesContainerEl.innerHTML = "";

  // -- GET ALL EPISODES -- access array using forEach https://www.youtube.com/watch?v=kTYRFuJv-gA
  episodeList.forEach((episode) => {
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

    if (episode.number >= 10) {
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

window.onload = fetchEpisodes;

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

function searchAndDisplay(searchValue, allEpisodes) {
  let episodes = [];
  const numberOfEpisodes = allEpisodes.length;

  if (searchValue === null) {
    episodes = allEpisodes;
  } else {

    episodes = allEpisodes.filter(
      (episode) =>
      episode.name.toLowerCase().includes(searchValue) ||
      episode.summary.toLowerCase().includes(searchValue)
    );
  }
  makePageForEpisodes(episodes);
}

function setupSearchEvent(allEpisodes) {
  searchEl.addEventListener("keyup", function (e) {
    let searchValue = e.target.value.toLowerCase();
    searchAndDisplay(searchValue, allEpisodes);
  });
}

// -- SELECT-BOX -- https://www.youtube.com/watch?v=I5vmeL0zYj4
const selectEl = document.getElementById("select-box");
const optionEl0 = document.createElement("option");
optionEl0.setAttribute("class", "optionEl0");
selectEl.appendChild(optionEl0);
optionEl0.textContent = "All episodes";

function addZero(number) {
  return (number < 10 ? "0" : "") + number;
}

function updateOptions(allEpisodes) {
  allEpisodes.forEach((episode) => {
    const optionEl1 = document.createElement("option");
    optionEl1.value = JSON.stringify(episode);
    optionEl1.textContent = `S${addZero(episode.season)}E${addZero(episode.number)} - ${episode.name}`;
    selectEl.appendChild(optionEl1);
  });
}

function setupSelectEvent(allEpisodes) {
  selectEl.addEventListener("change", (e) => {
    const episode = e.target.value;
    const firstOption = document.querySelector(".optionEl0").value;


    if (episode === firstOption) {
      makePageForEpisodes(allEpisodes);
    } else {
      makePageForEpisodes([JSON.parse(episode)]);
    };
  });
}

function fetchEpisodes() {

  return fetch("https://api.tvmaze.com/shows/82/episodes")
    .then(function (response) {
      return response.json();
    })
    .then(function (episodeList) {
      setup(episodeList);
      updateOptions(episodeList);
      setupSelectEvent(episodeList);
      setupSearchEvent(episodeList);
      // const url = episode.url;
      // const name = episode.name;
      // const episodeCode = `${episode.season} ${episode.number}`
      // const image = episode.image.medium;
      // const summary = episode.summary;

      // const episodeElement = makePageForEpisodes(episodeList);

      // document.body.appendChild(episodeElement);
    })
    .catch(function (err) {
      console.log(err);
    })
}