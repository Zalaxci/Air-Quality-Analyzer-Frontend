import { getSchools, getSchoolMetrics, getUniqueDates } from './data.js';

function renderMarkers(map, schools) {
    schools.forEach(school => {
      let marker = L.marker([school.sch_lat, school.sch_long]);
      marker.on('click', () => console.log(school));
      marker.addTo(map);
    });
}
async function renderMap(i, container) {
    let centerCoords = [40.59688, 22.9645578];
    let zoom = 13;
    let map = L.map(container);
    map.setView(centerCoords, zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    renderMarkers(map, await getSchools());
}
async function renderChart(i, container) {
    let columns = [
        ['x', ...await getUniqueDates()],
        ...await getSchoolMetrics(container.id)
    ];
    c3.generate({
      bindto: container,
      data: {
        x: 'x',
        columns
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%Y-%m-%d'
              }
          }
      }
    });
}

$('.map').each(renderMap);
$('.chart').each(renderChart);