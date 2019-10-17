"use strict";

import { LatLngBounds } from "leaflet";

import { url } from "./init";

export default async function (
  bbox: LatLngBounds
): Promise<GeoJSON.FeatureCollection | null> {
  const response = await fetch(
    `${url}/notes.json?bbox=${bbox.toBBoxString()}`,
    {
      method: "GET"
    }
  );

  return response.ok ? response.json() : null;
}
