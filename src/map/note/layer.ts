"use strict";

import L, { Map, LatLng } from "leaflet";

import styleFunction from "./style";

export default function(map: Map) {
  return L.geoJSON(null, {
    filter: (feature: GeoJSON.Feature) =>
      feature.properties.comments.length > 0,
    pointToLayer: (feature: GeoJSON.Feature, latlng: LatLng) => {
      return styleFunction(feature, latlng);
    }
  });
}
