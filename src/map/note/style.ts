"use strict";

import L, { LatLng, Marker } from "leaflet";

import icons from "./icons";
import popupContent from "./popup";

export default function (feature: GeoJSON.Feature, latlng: LatLng): Marker {
  const { status } = feature.properties;

  const marker = L.marker(latlng, {
    icon: icons[status]
  });

  const popup = popupContent(feature);

  marker.bindPopup(popup, {
    minWidth: 250
  });

  return marker;
}
