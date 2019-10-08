"use strict";

import { Map, LatLngBounds, GeoJSON } from "leaflet";

import { url } from "../../api/init";
import { notesLayer as notesLayerStore } from "../store";

async function getNotes(
  bbox: LatLngBounds
): Promise<GeoJSON.FeatureCollection | null> {
  const response = await fetch(`${url}/notes.json?bbox=${bbox.toBBoxString()}`);

  return response.ok ? response.json() : null;
}

export default async function(map: Map) {
  let layer: GeoJSON;

  notesLayerStore.subscribe(value => {
    layer = value;
  });

  const json = await getNotes(map.getBounds());

  if (json !== null) {
    layer.addData(json);
  }
}
