"use strict";

import { Map, GeoJSON } from "leaflet";

import { notesLayer as notesLayerStore } from "../store";
import getNotes from "../../api/get";

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
