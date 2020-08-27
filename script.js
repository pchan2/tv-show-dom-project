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
const searchEl = document.createElement("input");
bodyEl.appendChild(searchEl);
searchEl.type = "text";
searchEl.placeholder = "Your search term...";
searchEl.style.padding = ".8rem";
searchEl.style.margin = "1rem";
searchEl.style.border = "solid 2px grey";
searchEl.style.borderRadius = "10px";
searchEl.style.width = "17rem";

// container for all episode containers
bodyEl.appendChild(allEpisodesContainerEl);

// -- GET ALL EPISODES --
episodes.forEach((episode) => {
  const anchorEl = document.createElement("a");
  const episodeContainerEl = document.createElement("div");
  const nameEl = document.createElement("p");
  const imageMediumEl = document.createElement("img");
  const summaryEl = document.createElement("p");
  const episodeCodeEl = document.createElement("p");

  anchorEl.href = episode.url;
  anchorEl.style.textDecoration = "none";
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

  episodeContainerEl.style.border = "solid 1px grey";
  episodeContainerEl.style.borderRadius = "10px";
  episodeContainerEl.style.margin = "1rem";
  episodeContainerEl.style.padding = "1rem";
  episodeContainerEl.style.paddingTop = "0";
  episodeContainerEl.style.paddingBottom = "0";
  episodeContainerEl.style.width = "16rem";
  episodeContainerEl.style.fontSize = ".8rem";

  nameEl.style.border = "dotted 2px #eceeee";
  nameEl.style.borderRadius = "10px";
  nameEl.style.padding = "1rem";
  nameEl.style.fontSize = "1.2rem";
  nameEl.style.textAlign = "center";
  nameEl.style.backgroundColor = "white";
  nameEl.style.transition = "1s";
  nameEl.onmouseover = function() {
    this.style.backgroundColor = "#eceeee";
    this.style.border = "dotted 2px grey";
  }
  nameEl.onmouseout = function() {
    this.style.backgroundColor = "white";
    this.style.border = "dotted 2px #eceeee";
  }

  episodeCodeEl.style.fontWeight = "bold";
  
});

bodyEl.style.width = "100vw"; // BUG: the elements go off screen
bodyEl.style.fontFamily = "Arial";
bodyEl.style.fontSize = ".8rem";
bodyEl.style.background = "#eceeee";
allEpisodesContainerEl.style.display = "flex";
allEpisodesContainerEl.style.width ="100%";

// -- FOOTER --
const footerEl = document.createElement("footer");
footerEl.innerHTML = "Data is from <a href=\"https://www.tvmaze.com\">TVMaze.com</a>";
bodyEl.appendChild(footerEl);
footerEl.style.textAlign = "center";

// -- LIVE SEARCH with "keyup" -- custom search filter 8:11 https://www.youtube.com/watch?v=3NG8zy0ywIk
// -- LIVE SEARCH with "fetch" -- Quick Autocomplete App With JS & JSON https://www.youtube.com/watch?v=1iysNUrI3lw
// -- LIVE SEARCH with "keyup" + "filter" -- https://www.youtube.com/watch?v=DzXmAKdEYIs
searchEl.addEventListener("keyup", function(e) {
  const term = e.target.value.toLowerCase();
  episodes.forEach(function(episode) {
    if(episode.name.toLowerCase().includes(term) ||
    episode.summary.toLowerCase().includes(term)) {
      episodeContainerEl.style.display = "block";
    } else {
      episodeContainerEl.style.display = "none";
    }
  })
})