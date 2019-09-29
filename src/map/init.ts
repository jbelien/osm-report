"use strict";

import L from "leaflet";
import "leaflet.locatecontrol";

import loadNotes from "./note/load";

export default function(container: HTMLElement) {
  const map = L.map(container).setView([0.0, 0.0], 2);

  L.control.scale().addTo(map);
  L.control.locate({ showPopup: false }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
  }).addTo(map);

  map.on("zoomend", event => {
    loadNotes(event.target);
  });

  return map;
}
