"use strict";

import { Icon } from "leaflet";

export default {
  new: new Icon({
    iconUrl: "./images/note/new_note_marker.png",
    iconRetinaUrl: "./images/note/new_note_marker@2x.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34]
  }),
  open: new Icon({
    iconUrl: "./images/note/open_note_marker.png",
    iconRetinaUrl: "./images/note/open_note_marker@2x.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34]
  }),
  closed: new Icon({
    iconUrl: "./images/note/closed_note_marker.png",
    iconRetinaUrl: "./images/note/closed_note_marker@2x.png",
    iconSize: [25, 40],
    iconAnchor: [12, 40],
    popupAnchor: [1, -34]
  })
};
