"use strict";

import L, { Control, LeafletEvent, LeafletMouseEvent, Map, TileLayer } from "leaflet";
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

export default function (container: HTMLElement): Map {
  const map = new Map(container).setView([0.0, 0.0], 2);

  mapStore.set(map);

  (new Control.Scale()).addTo(map);

  // @ts-expect-error There is no TypeScript definition for Leafet.LocateControl
  L.control.locate({
    icon: "mi-location",
    iconElementTag: "i",
    showPopup: false
  }).addTo(map);

  const baseLayer = new TileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>"
    }
  );

  const notesLayer = createNotesLayer();

  map.addLayer(baseLayer);
  map.addLayer(notesLayer);

  baseLayerStore.set(baseLayer);
  notesLayerStore.set(notesLayer);

  let zoom: number;
  zoomStore.subscribe(value => {
    zoom = value;
  });

  let autopan = false;

  map.on({
    autopanstart: () => {
      autopan = true;
    },
    moveend: (event: LeafletEvent) => {
      if (autopan !== true) {
        clearNotes();

        if (zoom > 12) {
          loadNotes(event.target);
        }
      }

      autopan = false;
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
