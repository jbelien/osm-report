"use strict";

import { get } from "svelte/store";

import L, { LeafletMouseEvent } from "leaflet";

import { marker as markerStore } from "../store";

export default function(event: LeafletMouseEvent) {
  let marker = get(markerStore);

  if (marker === null) {
    marker = L.marker(event.latlng).addTo(event.target);
  } else {
    marker.setLatLng(event.latlng);
  }

  markerStore.set(marker);
}
