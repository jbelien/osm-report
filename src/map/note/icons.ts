"use strict";

import L from "leaflet";

export default {
  new: L.icon({
    iconUrl: "./images/note/new_note_marker.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40]
  }),
  open: L.icon({
    iconUrl: "./images/note/open_note_marker.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40]
  }),
  closed: L.icon({
    iconUrl: "./images/note/closed_note_marker.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40]
  })
};
