const data = {
  labels: [
    "12am-3am",
    "3am-6pm",
    "6am-9am",
    "9am-12am",
    "12pm-3pm",
    "3pm-6pm",
    "6pm-9pm",
    "9am-12am"
  ],
  datasets: [
    {
      title: "Some Data",
      values: [25, 40, 30, 35, 8, 52, 17, -4]
    },
    {
      title: "Another Set",
      values: [25, 50, -10, 15, 18, 32, 27, 14]
    }
  ]
};

const charts = [
  {type: 'bar'},
  {type: 'line'},
  {type: 'scatter'},
  {type: 'pie'}
];

const chartsReferences = charts.map(({type}, index) => {
  const indice = index + 1;
  return new Chart({
    parent: `#chart${indice}`, // or a DOM element
    title: `Gráfica ${indice}`,
    data: data,
    type,
    height: 300,

    format_tooltip_x: d => (d + '').toUpperCase(),
    format_tooltip_y: d => d + ' pts'
  });
});

