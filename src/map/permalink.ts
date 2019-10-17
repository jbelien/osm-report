"use strict";

import L, { LatLng, Map } from "leaflet";

export default class {
  map: Map;
  center: LatLng = L.latLng(0, 0);
  zoom = 2;

  shouldUpdate = true;

  constructor (map: Map) {
    this.map = map;

    if (window.location.hash !== "") {
      const hash = window.location.hash.replace("#map=", "");
      const parts = hash.split("/");

      if (parts.length === 3) {
        this.zoom = parseInt(parts[0], 10);
        this.center = L.latLng(
          parseFloat(parts[1]),
          parseFloat(parts[2])
        );

        this.apply();
      }
    }

    this.map.on("moveend", () => {
      if (!this.shouldUpdate) {
        // do not update the URL when the view was changed in the 'popstate' handler
        this.shouldUpdate = true;
        return;
      }

      this.center = this.map.getCenter();
      this.zoom = this.map.getZoom();

      const longitude = Math.round(this.center.lng * 1000000) / 1000000;
      const latitude = Math.round(this.center.lat * 1000000) / 1000000;

      const hash = `#map=${this.zoom}/${latitude}/${longitude}`;
      const state = {
        zoom: this.zoom,
        center: this.center
      };

      window.history.pushState(state, "map", hash);
    });

    window.addEventListener("popstate", (event: PopStateEvent) => {
      if (event.state === null) {
        return;
      }

      this.center = event.state.center;
      this.zoom = event.state.zoom;

      this.apply();

      this.shouldUpdate = false;
    });
  }

  private apply (): void {
    this.map.setView(this.center, this.zoom);
  }
}
