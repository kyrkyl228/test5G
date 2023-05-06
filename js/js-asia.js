google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Company', 'market share'],
    ['Samsung',     9],
    ['Huawei',      25],
    ['Ericsson',  29],
    ['Nokia', 31],
    ['Other',    0],
    ['ZTE',    8],
  ]);

  var options = {
    width: 750,
    height: 750,
    pieHole: 0.4,
    fontSize: 22,
    chartArea: {width: '90%', height: '80%'},
    pieSliceTextStyle: {fontSize: 24,},
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