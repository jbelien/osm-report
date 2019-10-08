"use strict";

import { writable } from "svelte/store";

export const baseLayer = writable(null);
export const notesLayer = writable(null);
export const marker = writable(null);
export const zoom = writable(null);
