Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Current Employment Fields'
  },
    subtitle: {
      text: 'Free Code Camp Survey'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Employment Fields',
    colorByPoint: true,
    data: [{
      name: 'Architecture & Engineering',
      y: 202,
      sliced: true,
      selected: true
    }, {
      name: 'Arts, Entertainment, Sports, & Media',
      y: 372
    }, {
      name: 'Construction & Extraction',
      y: 129
    }, {
      name: 'Education',
      y: 626
    }, {
      name: 'Farming, Fishing, & Forestry',
      y: 38
    }, {
      name: 'Finance',
      y: 264
    }, {
      name: 'Food & Beverage',
      y: 386
    }, {
      name: 'Health Care',
      y: 325
    }, {
      name: 'Law Enforcement & Fire/Rescue',
      y: 40
    }, {
      name: 'Legal',
      y: 70
    }, {
      name: 'Office & Admin Support',
      y: 361
    }, {
      name: 'Sales',
      y: 415
    }, {
      name: 'Software Development & IT',
      y: 4721
    }, {
      name: 'Transportation',
      y: 167
    }]
  }]
});