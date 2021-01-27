Highcharts.chart('barchart', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Median Income and Expected Earning by Gender'
  },
  subtitle: {
    text: 'Free Code Camp Survey'
  },
  xAxis: {
    categories: ['Agender', 'Female', 'Genderqueer', 'Male', 'Transgender'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Salary',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: null
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Income',
    data: [20000, 35000, 25000, 32000, 32000]
  }, {
    name: 'Expected Earning',
    data: [60000, 60000, 50000, 50000, 50000]
  }]
});

 