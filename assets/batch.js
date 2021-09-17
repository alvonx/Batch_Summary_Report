// create data
var data = [
  {x: "A", value: 637166},
  {x: "B", value: 721630},
  {x: "C", value: 148662},
  {x: "D", value: 78662},
  {x: "E", value: 90000}
];

// create a chart and set the data
chart = anychart.pie(data);

// set the container id
chart.container("score-student");

// initiate drawing the chart
chart.draw();