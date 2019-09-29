"use strict";

import L from "leaflet";

import { url } from "../../api/init";
import styleFunction from "./style";
import popupFunction from "./popup";

async function get(bbox: string): Promise<GeoJSON.FeatureCollection> {
  const response = await fetch(`${url}/notes.json?bbox=${bbox}`);

  return response.ok ? response.json() : null;
}

export default async function(map: any) {
  const bounds = map.getBounds().toBBoxString();

  const json = await get(bounds);

  if (json !== null) {
    console.log(json);

    L.geoJSON(json, {
      pointToLayer: (feature, latlng) => styleFunction(feature, latlng),
      onEachFeature: (feature, layer) => popupFunction(feature, layer)
    }).addTo(map);
  }
}
