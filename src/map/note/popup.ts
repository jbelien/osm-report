"use strict";

export default function(feature: GeoJSON.Feature) {
  const { id, comments } = feature.properties;

  if (comments.length > 0) {
    const comment = comments[0].html;

    let content = `<p>${comment}</p>`;
    content += `<p>${comments.length - 1} comment(s)</p>`;
    content += `<a target="_blank" href="https://www.openstreetmap.org/note/${id}" style="text-decoration: none; white-space: nowrap;"><i class="far fa-comments"></i> Read more...</a>`;

    return content;
  }

  return null;
}
