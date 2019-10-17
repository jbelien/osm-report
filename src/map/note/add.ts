"use strict";

import L, { LeafletMouseEvent, Marker } from "leaflet";

import { marker as markerStore, zoom as zoomStore } from "../store";

export default function (event: LeafletMouseEvent): void {
  let marker: Marker;
  let zoom: number;

  markerStore.subscribe(value => {
    marker = value;
  });
  zoomStore.subscribe(value => {
    zoom = value;
  });

  if (zoom > 12) {
    if (marker === null) {
      marker = L.marker(event.latlng).addTo(event.target);
    } else {
      marker.setLatLng(event.latlng);
    }

    markerStore.set(marker);
  }
}
