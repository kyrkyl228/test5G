google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['N', 'Huawei', 'ZTE', 'Samsung', 'Nokia', 'Ericsson',
         'Other'],
        ['Latin America', 10, 2, 0, 10, 11, 4],
        ['Africa', 14, 3, 1, 9, 7, 5 ],
        ['Asia', 25, 8, 9, 31, 29, 0 ]
      ]);

      var options = {
        colors: [
            "#f45128",
            "#f1e956",
            "#929597",
            "#55ed7b",
            "#1fa5ed",
            "#020b18",
        ],
        fontSize: 30,
        width: 1000,
        height: 900,
        chartArea: {width: '90%', height: '80%'},
        legend: { position: 'top', maxLines: 2, textStyle: {fontSize: 24,}},
        bar: { groupWidth: '75%' },
        isStacked: false,
    };
  

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['N', 'Huawei', 'ZTE', 'Samsung', 'Nokia', 'Ericsson',
        'Other'],
        ['World', 49, 13, 10, 50, 47, 9],
      ]);

      var options = {
        colors: [
            "#f45128",
            "#f1e956",
            "#929597",
            "#55ed7b",
            "#1fa5ed",
            "#020b18",
        ],
        fontSize: 30,
        width: 800,
        height: 900,
        chartArea: {width: '90%', height: '80%'},
        legend: { position: 'none', maxLines: 2, textStyle: {fontSize: 24,}},
        bar: { groupWidth: '75%' },
        isStacked: false,
    };
  

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}