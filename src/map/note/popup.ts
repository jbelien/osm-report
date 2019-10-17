"use strict";

import moment from "moment";

export default function (feature: GeoJSON.Feature): string {
  const { id, comments } = feature.properties;
  const date = feature.properties.date_created;

  if (comments.length > 0) {
    const comment = comments[0].html;
    const age = moment(date, "YYYY-MM-DD HH:mm:SS UTC", true).fromNow();

    let content = `<p><strong>Posted ${age}</strong></p>`;
    content += `<p>${comment}</p>`;
    content += `<p>${comments.length - 1} comment(s)</p>`;
    content += `<a target="_blank" href="https://www.openstreetmap.org/note/${id}" style="text-decoration: none; white-space: nowrap;"><i class="far fa-comments"></i> Read more...</a>`;

    return content;
  }

  return null;
}
