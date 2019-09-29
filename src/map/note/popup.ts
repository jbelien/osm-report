"use strict";

export default function(feature: GeoJSON.Feature, layer: any) {
  const { comments } = feature.properties;

  layer.bindPopup(comments[0].html);
}
