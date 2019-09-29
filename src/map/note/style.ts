"use strict";

import L from "leaflet";

import icons from "./icons";

export default function(feature: GeoJSON.Feature, latlng: Object) {
  console.log(feature, latlng);

  const { status } = feature.properties;

  return new L.Marker(latlng, {
    icon: icons[status]
  });
}
