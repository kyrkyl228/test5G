google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Company', 'market share'],
    ['Samsung',     3],
    ['Huawei',      35],
    ['Ericsson',  23],
    ['Nokia', 18],
    ['Other',    13],
    ['ZTE',    8],
  ]);

  var options = {
    width: 800,
    height: 800,
    pieHole: 0.4,
    fontSize: 24,
    chartArea: {width: '80%', height: '80%'},
    pieSliceTextStyle: {fontSize: 20},
    legend: { position: 'bottom', textStyle: {fontSize: 20}},
    colors: [
        "#929597",
        "#f45128",
        "#1fa5ed",
        "#55ed7b",
        "#020b18",
        "#f1e956",
    ],
  };
  

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}