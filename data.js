let schools = (async () => {
    let response = await fetch('http://lessons.idrogios.com/Air-Quality-Analyzer/Air-Quality-Analyzer/rest/get.php');
    return await response.json();
})();

export async function getSchools() {
    return await schools;
}
export async function getUniqueDates() {
    let allMetrics = (await schools).map(school => school.metrics).flat();
    let allDates = (await allMetrics).map(metric => metric.date);
    return [...await new Set(await allDates)];
}
export async function getSchoolMetrics(datatype) {
    return (await schools).map(school => {
        let name = school.sch_name;
        let metrics = school.metrics.map(
            metric => parseInt(metric[datatype])
        );
        return [name, ...metrics];
    });
}