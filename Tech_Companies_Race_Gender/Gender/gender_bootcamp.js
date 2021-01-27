var ultimateColors = [
    ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
    ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
    ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
    ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
  ];

var data = [{
    type: "pie",
    values: [38,59,3],
    labels: ["female", "male", "other"],
    marker: {
        colors: ultimateColors[0]
      },
    textinfo: "percent",
    hoverinfo: 'label+percent',
    //textposition: "outside",
    hole:.5,
    automargin: true
}]

var layout = {
    height: 400,
    width: 600,
    margin: {"t":0, "b": 0, "1": 0, "r":0},
    showlegend: false,
    annotations: [
        {
            font: {size: 15},
            showarrow: false,
            text: "GA Tech Bootcamp",
            x: 0.5,
            y:0.5
        }
    ]
};

Plotly.newPlot("pie", data, layout);