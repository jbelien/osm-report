"use strict";

import { GeoJSON } from "leaflet";

import { notesLayer as notesLayerStore } from "../store";

export default function (): void {
  let layer: GeoJSON;

  notesLayerStore.subscribe(value => {
    layer = value;
  });

  layer.clearLayers();
}
