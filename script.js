let globalEpisodes = [];

//You can edit ALL of the code here
function setup(allEpisodes) {
  const numberOfEpisodes = allEpisodes.length;
  makePageForEpisodes(allEpisodes);
}

// -- Make Page for Shows Function --
function makePageForShows(showList) {

  // -- GET ALL SHOWS --
  showList.forEach((show) => {
    const showContainer = document.createElement("section");
    const titleEl = document.createElement("article");
    const showContentEl = document.createElement("article");
    const mainCardEl = document.createElement("article");
    const sideCardEl = document.createElement("article");

    const nameEl = document.createElement("p");
    
    const coverPhotoEl = document.createElement("img");
    const summaryEl = document.createElement("p"); 
  
    const ratingEl = document.createElement("p");
    const genresEl = document.createElement("p");
    const statusEl = document.createElement("p");
    const runtimeEl = document.createElement("p");

    // -- CREATE CLASSES --
    showContainer.className = "showContainer";
    showContentEl.className = "showContentEl";
    mainCardEl.className = "mainCardEl";
    coverPhotoEl.className = "coverPhotoEl";
    titleEl.className = "titleEl";
    summaryEl.className = "summaryEl";
    sideCardEl.className = "sideCardEl";


    // -- GIVE ELEMENTS VALUE --
    nameEl.textContent = show.name;
    coverPhotoEl.src = show.image.medium;
    summaryEl.innerHTML = show.summary;
    ratingEl.textContent = `Rated: ${show.rating.average}`;
    genresEl.textContent = `Genres: ${show.genres}`;
    statusEl.textContent = `Status: ${show.status}`;
    runtimeEl.textContent = `Runtime: ${show.runtime}`;

    // -- APPEND ELEMENTS --
    bodyEl.appendChild(showContainer);

    showContainer.append(titleEl);
    showContainer.append(showContentEl);
    showContentEl.append(mainCardEl);
    showContentEl.append(sideCardEl);

    titleEl.append(nameEl);

    mainCardEl.append(coverPhotoEl);
    mainCardEl.append(summaryEl);

    sideCardEl.append(ratingEl);

    sideCardEl.append(genresEl);
    sideCardEl.append(statusEl);
    sideCardEl.append(runtimeEl);

    // if(coverPhotoEl.src = null) {
    //   return null
    // } else {

    // }
  })
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

window.onload = fetchShows;

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


  searchEl.addEventListener("keyup", function (e) {
    let searchValue = e.target.value.toLowerCase();
    searchAndDisplay(searchValue, globalEpisodes);
  });

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

selectEl.addEventListener("change", (e) => {
  const episode = e.target.value;
  const firstOption = document.querySelector(".optionEl0").value;


  if (episode === firstOption) {
    makePageForEpisodes(globalEpisodes);
  } else {
    makePageForEpisodes([JSON.parse(episode)]);
  };
});

// -- SELECT-SHOW
const selectShowEl = document.getElementById("select-show");
const optionShowEl = document.createElement("option");
optionShowEl.setAttribute("class", "optionShowEl");
selectShowEl.appendChild(optionShowEl);
optionShowEl.textContent = "All shows";

function updateShows(allShows) {
  allShows.forEach((show) => {
    const optionShowEl1 = document.createElement("option");
    optionShowEl1.value = JSON.stringify(show);
    optionShowEl1.textContent = show.name;
    selectShowEl.appendChild(optionShowEl1);
  });

  makePageForShows(allShows);
}

selectShowEl.addEventListener("change", (e) => {
  const show = JSON.parse(e.target.value);
    // const firstShowOption = document.querySelector(".optionShowEl").value;
console.log(show)
    showId = show.id
    fetchEpisodes();
  });

// -- FETCH SHOWS
let showId = null;

function fetchShows() {
  updateShows(getAllShows())
}

function fetchEpisodes() {

  const url = `https://api.tvmaze.com/shows/${showId}/episodes`
  console.log(url)
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (episodeList) {
      setup(episodeList);
      updateOptions(episodeList);
      globalEpisodes = episodeList;
    })
    .catch(function (err) {
      console.log(err);
    })
}

window.fetchEpisodes = fetchEpisodes;