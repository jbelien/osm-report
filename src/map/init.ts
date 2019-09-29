"use strict";

import L, { LeafletEvent } from "leaflet";
import "leaflet.locatecontrol";

import {
  baseLayer as baseLayerStore,
  notesLayer as notesLayerStore
} from "./store";
import createNotesLayer from "./note/layer";
import loadNotes from "./note/load";
import clearNotes from "./note/clear";

export default function(container: HTMLElement) {
  const map = L.map(container).setView([0.0, 0.0], 2);

  L.control.scale().addTo(map);
  L.control.locate({ showPopup: false }).addTo(map);

  const baseLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }
  );

  const notesLayer = createNotesLayer(map);

  map.addLayer(baseLayer);
  map.addLayer(notesLayer);

  baseLayerStore.set(baseLayer);
  notesLayerStore.set(notesLayer);

  map.on({
    moveend: (event: LeafletEvent) => {
      loadNotes(event.target);
    },
    zoomend: (event: LeafletEvent) => {
      loadNotes(event.target);
    }
  });

  return map;
}
