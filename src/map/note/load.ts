"use strict";

import { get } from "svelte/store";

import L, { Map, LatLng, LatLngBounds } from "leaflet";

import { url } from "../../api/init";
import { notesLayer } from "../store";
import styleFunction from "./style";
import { Feature } from "geojson";

async function getNotes(
  bbox: LatLngBounds
): Promise<GeoJSON.FeatureCollection> {
  const response = await fetch(`${url}/notes.json?bbox=${bbox.toBBoxString()}`);

  return response.ok ? response.json() : null;
}

export default async function(map: Map) {
  const layer = get(notesLayer);

  const json = await getNotes(map.getBounds());

  layer.clearLayers();

  if (json !== null) {
    layer.addData(json);
  }
}
