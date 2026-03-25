/**
 * OpenStreetMap embed bbox (WGS84): minLon, minLat, maxLon, maxLat
 * Frames Liverpool City Region councils (Liverpool, Wirral, Sefton, Knowsley,
 * St Helens, Halton) plus nearby West Lancashire / Wigan edges we mention on the site.
 * Adjust if your operating area changes.
 */
export const MERSEYSIDE_MAP_BBOX = {
  minLon: -3.2,
  minLat: 53.28,
  maxLon: -2.58,
  maxLat: 53.68,
} as const;

/** OSM “export/embed” iframe URL (Mapnik tiles) */
export function getMerseysideOsmEmbedUrl(): string {
  const { minLon, minLat, maxLon, maxLat } = MERSEYSIDE_MAP_BBOX;
  const bbox = `${minLon},${minLat},${maxLon},${maxLat}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik`;
}

/** Link to same view on openstreetmap.org (full screen, search, etc.) */
export function getMerseysideOsmMapUrl(): string {
  const { minLon, minLat, maxLon, maxLat } = MERSEYSIDE_MAP_BBOX;
  const centerLon = (minLon + maxLon) / 2;
  const centerLat = (minLat + maxLat) / 2;
  // Zoom ~10 fits this bbox in a typical viewport
  return `https://www.openstreetmap.org/#map=10/${centerLat}/${centerLon}`;
}
