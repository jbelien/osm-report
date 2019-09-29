"use strict";

import L from "leaflet";

export default {
  new: L.icon({
    iconUrl: "./images/note/new_note_marker.png",
    iconRetinaUrl: "./images/note/new_note_marker@2x.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34]
  }),
  open: L.icon({
    iconUrl: "./images/note/open_note_marker.png",
    iconRetinaUrl: "./images/note/open_note_marker@2x.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34]
  }),
  closed: L.icon({
    iconUrl: "./images/note/closed_note_marker.png",
    iconRetinaUrl: "./images/note/closed_note_marker@2x.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34]
  })
};
