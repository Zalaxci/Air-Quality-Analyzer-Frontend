import { renderMap } from '../components/map.js';
import { drawChart } from '../components/chart.js';

async function renderData(url) {
    let response = await fetch(url);
    let schools = await response.json();
    forElement('.map', renderMap, await schools);
    forElement('.c3', drawChart, await schools);
}
renderData('http://lessons.idrogios.com/Air-Quality-Analyzer/Air-Quality-Analyzer/rest/get.php');