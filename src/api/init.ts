"use strict";

export const url = process.env.API || "https://api.openstreetmap.org/api/0.6";
export const hashtag = "#osmreport" + (process.env.TAGS && process.env.TAGS.length > 0 ? " " + process.env.TAGS : "");
