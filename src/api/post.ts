"use strict";

import { LatLng } from "leaflet";

import { url } from "./init";

export default async function(
  latlng: LatLng,
  text: string
): Promise<GeoJSON.Feature | null> {
  const { lat, lng } = latlng;

  const response = await fetch(
    `${url}/notes.json?lat=${lat}&lon=${lng}&text=${encodeURIComponent(text)}`,
    {
      method: "POST"
    }
  );

  return response.ok ? response.json() : null;
}
