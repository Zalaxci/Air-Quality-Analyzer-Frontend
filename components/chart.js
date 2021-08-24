function getUniqueDates(schools) {
    let allMetrics = schools.map(school => school.metrics).flat();
    let allDates = allMetrics.map(metric => metric.date);
    return [...new Set(allDates)];
}
function getSchoolMetrics(school, datatype) {
    let metrics = school.metrics;
    return metrics.map(metric => parseInt(metric[datatype]));
}
export function drawChart(container, schools) {
    let columns = [
        ['x', ...getUniqueDates(schools)]
    ]
    schools.forEach(school => {
        let name = school.sch_name;
        let metrics = getSchoolMetrics(school, container.id);
        columns.push([name, ...metrics])
    });
    let chart = c3.generate({
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