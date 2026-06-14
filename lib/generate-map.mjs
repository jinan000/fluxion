import { getMapJSON } from 'dotted-map';
import fs from 'fs';

// Precompute the map grid data cropped to GCC region only
// Lower height = fewer dots = better performance
const mapJsonString = getMapJSON({
  height: 30,
  grid: 'diagonal',
  region: {
    lat: { min: 12, max: 34 },
    lng: { min: 32, max: 62 },
  },
});

fs.writeFileSync(
  './lib/map-data.json',
  mapJsonString
);

const data = JSON.parse(mapJsonString);
console.log(`GCC region map generated — ${Object.keys(data.points).length} dots`);
