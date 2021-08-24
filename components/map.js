function drawMarkers(map, schools) {
  schools.forEach(school => {
    let marker = L.marker([school.sch_lat, school.sch_long]);
    marker.on('click', () => console.log(school))
    marker.addTo(map);
  });
}
export function renderMap(mapElement, schools) {
  let centerCoords = [40.59688, 22.9645578];
  let zoom = 13;
  let map = L.map(mapElement);
  map.setView(centerCoords, zoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  drawMarkers(map, schools);
}