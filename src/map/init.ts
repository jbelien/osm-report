"use strict";

import L, { LeafletEvent, LeafletMouseEvent } from "leaflet";
import "leaflet.locatecontrol";

import {
  map as mapStore,
  baseLayer as baseLayerStore,
  notesLayer as notesLayerStore,
  zoom as zoomStore
} from "./store";
import createNotesLayer from "./note/layer";
import clearNotes from "./note/clear";
import loadNotes from "./note/load";
import addMarker from "./note/add";

export default function(container: HTMLElement) {
  const map = L.map(container).setView([0.0, 0.0], 2);

  mapStore.set(map);

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

  let zoom: number;
  zoomStore.subscribe(value => {
    zoom = value;
  });

  map.on({
    moveend: (event: LeafletEvent) => {
      clearNotes();

      if (zoom > 12) {
        loadNotes(event.target);
      }
    },
    zoomend: (event: LeafletEvent) => {
      zoomStore.set(event.target.getZoom());
    },
    click: (event: LeafletMouseEvent) => {
      addMarker(event);
    }
  });

  return map;
}
