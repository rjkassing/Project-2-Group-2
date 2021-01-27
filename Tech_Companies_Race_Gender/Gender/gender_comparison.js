var ultimateColors = [
    ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
    ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
    ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
    ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
  ];

// var data = [{
//     type: "pie",
//     values: [38,59,3],
//     labels: ["female", "male", "other"],
//     marker: {
//         colors: ultimateColors[0]
//       },
//     textinfo: "percent",
//     hoverinfo: 'label+percent',
//     //textposition: "outside",
//     hole:.6,
//     automargin: true
// }]

// var layout = {
//     height: 400,
//     width: 600,
//     //margin: {"t":0, "b": 0, "1": 0, "r":0},
//     showlegend: false,
//     annotations: [
//         {
//             font: {size: 12},
//             showarrow: false,
//             text: "GA Tech Bootcamp",
//             x: 0.5,
//             y:0.5
//         }
//     ]
// };

// Plotly.newPlot("pie", data, layout);


var allLabels = ['female', 'male', 'other'];

var allValues = [
    [35, 59, 3],
    [51, 49, 0],
    [20, 80, 0],
    [6, 94, 0]
];

var data = [{
    values: allValues[0],
    labels: allLabels,
    type: 'pie',
    name: 'GATech Bootcamp',
    marker: {
        colors: ultimateColors[0]
      },
    domain: {
        row: 0,
        column: 0
    },
    hoverinfo: 'label'+'percent'+'name',
    textinfo: "none",
    hole:.6,
    automargin: true
}, {
    values: allValues[1],
    labels: allLabels,
    type: 'pie',
    name: 'U.S. Population',
    marker: {
        colors: ultimateColors[0]
      },
    domain: {
        row: 1,
        column: 0
    },
    hoverinfo: 'label'+'percent'+'name',
    textinfo: "none",
    hole:.6,
    automargin: true
},{
    values: allValues[2],
    labels: allLabels,
    type: 'pie',
    name: 'U.S. Congress',
    marker: {
        colors: ultimateColors[0]
      },
    domain: {
        row: 0,
        column: 1
    },
    hoverinfo: 'label'+'percent'+'name',
    textinfo: "none",
    hole:.6,
    automargin: true
},{
    values: allValues[3],
    labels: allLabels,
    type: 'pie',
    name: 'Fortune 500 CEOs',
    marker: {
        colors: ultimateColors[0]
      },
    domain: {
        x: [0.52,1],
        y: [0, 0.48]
    },
    hoverinfo: 'label'+'percent'+'name',
    textinfo: "none",
    hole:.6,
    automargin: true
}];

var layout = {
    height: 600,
    width: 800,
    margin: {"t":0, "b": 0, "1": 0, "r":0},
    grid: {rows: 2, columns: 2},
    annotations: [
        {
          font: {
            size: 18
          },
          showarrow: false,
          text: 'GATech Bootcamp',
          x: 0.10,
          y: 0.8
        },
        {
          font: {
            size: 18
          },
          showarrow: false,
          text: 'U.S. Congress',
          x: 0.87,
          y: 0.8
        },
        {
            font: {
              size: 18
            },
            showarrow: false,
            text: 'U.S. Population',
            x: 0.12,
            y: 0.21
          },
          {
            font: {
              size: 18
            },
            showarrow: false,
            text: 'Fortune500 CEOs',
            x: 0.89,
            y: 0.22
          },
      ],
  };

  Plotly.newPlot("pie", data, layout);


