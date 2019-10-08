"use strict";

import { get } from "svelte/store";

import { notesLayer } from "../store";

export default function() {
  const layer = get(notesLayer);

  layer.clearLayers();
}
