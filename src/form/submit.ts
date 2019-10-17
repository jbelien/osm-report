"use strict";

import { Marker, Map } from "leaflet";

import { marker as markerStore } from "../map/store";
import postNote from "../api/post";
import clearNotes from "../map/note/clear";
import load from "../map/note/load";

export default function (note: string, map: Map): void {
  let marker: Marker;
  markerStore.subscribe(value => {
    marker = value;
  });

  clearNotes();

  postNote(marker.getLatLng(), note).then(() => {
    marker.remove();
    markerStore.set(null);

    document.querySelector("form").reset();

    load(map);
  });
}
