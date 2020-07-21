"use strict";

import { GeoJSON, LatLng, Layer, Marker } from "leaflet";

import styleFunction from "./style";

export default function (): Layer {
  return new GeoJSON(null, {
    filter: (feature: GeoJSON.Feature): boolean => {
      return feature.properties.comments.length > 0;
    },
    pointToLayer: (feature: GeoJSON.Feature, latlng: LatLng): Marker => {
      return styleFunction(feature, latlng);
    }
  });
}
