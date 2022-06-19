'use_strict';

import { createGridsHtml } from "./scripts/grids.js";
import { Brave } from "./scripts/brave.js";
import { Maps } from "./scripts/map.js";

// map meta data
const mapInfo = {
  mapSize: 11,
  gridSize: 50,
  mapLeft: 550,
  mapTop: 50,
  floorRange: 21,
};

// elements
const backgroundElement = document.querySelector(".background");
const mapElement = document.querySelector(".mapContent");
const braveContentElement = document.querySelector(".braveContent");

// background
const backgroundHtml = createGridsHtml(
  /* numRows= */ Math.floor (window.innerHeight / 50),
  /* numCols= */ Math.floor (window.innerWidth / 50),
  /* gridSize= */ 50,
  /* left= */ 0,
  /* top= */ 0,
  /* className= */ "",
  /* imgArr= */ "",
  false
);
backgroundElement.insertAdjacentHTML("beforeend", backgroundHtml);

/** Brave */
const brave = new Brave(mapInfo);

// Create Map Html
brave.renderMap();
// Create Brave Html
brave.__initializeBraveElement();
//
brave.renderPanel();
// Add Event listener to control the brave
window.addEventListener("keydown", (e) => {
  const code = e.code;
  switch (code) {
    case "ArrowLeft":
      brave.turnLeft();
      break;
    case "ArrowRight":
      brave.turnRight();
      break;
    case "ArrowUp":
      brave.turnUp();
      break;
    case "ArrowDown":
      brave.turnDown();
      break;
    default:
      break;
  }
});
