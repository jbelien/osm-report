"use strict";

import { get } from "svelte/store";

import { notesLayer } from "../store";

export default async function(map: any) {
  const layer = get(notesLayer);

  if (layer !== null) {
    layer.clearLayers();
  }
}
