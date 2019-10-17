"use strict";

import L, { LatLng, Layer } from "leaflet";

import styleFunction from "./style";

export default function (): Layer {
  return L.geoJSON(null, {
    filter: (feature: GeoJSON.Feature) => {
      return feature.properties.comments.length > 0;
    },
    pointToLayer: (feature: GeoJSON.Feature, latlng: LatLng) => {
      return styleFunction(feature, latlng);
    }
  });
}
