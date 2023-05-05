/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

// using math in the data instead of final values just to illustrate the idea of Waterfall chart
// a separate data field for step series is added because we don't need last step (notice, the last data item doesn't have stepValue)
chart.data = [ {
  category: "Net revenue",
  value: 8786,
  open: 0,
  stepValue: 8786,
  color: '#15d1b5',
  displayValue: 8786
}, {
  category: "Cost of sales",
  value: 8786 - 2786,
  open: 8786,
  stepValue: 8786 - 2786,
  color: '#15d188',
  displayValue: 2786
}, {
  category: "Operating expenses",
  value: 8786 - 2786 - 1786,
  open: 8786 - 2786,
  stepValue: 8786 - 2786 - 1786,
  color: '#fd416a',
  displayValue: 1786
}, {
  category: "Amortisation",
  value: 8786 - 2786 - 1786 - 453,
  open: 8786 - 2786 - 1786,
  stepValue: 8786 - 2786 - 1786 - 453,
  color: '#fd41b4',
  displayValue: 453
}, {
  category: "Income from equity",
  value: 8786 - 2786 - 1786 - 453 + 1465,
  open: 8786 - 2786 - 1786 - 453,
  stepValue: 8786 - 2786 - 1786 - 453 + 1465,
  color: '#fea700',
  displayValue: 1465
}, {
  category: "Operating income",
  value: 8786 - 2786 - 1786 - 453 + 1465,
  open: 0,
  color: '#fe5a00',
  displayValue: 8786 - 2786 - 1786 - 453 + 1465
} ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 40;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "category";
columnSeries.dataFields.valueY = "value";
columnSeries.dataFields.openValueY = "open";
columnSeries.fillOpacity = 0.8;
columnSeries.sequencedInterpolation = true;
columnSeries.interpolationDuration = 1500;

var columnTemplate = columnSeries.columns.template;
columnTemplate.strokeOpacity = 0;
columnTemplate.propertyFields.fill = "color";

var label = columnTemplate.createChild(am4core.Label);
label.text = "{displayValue.formatNumber('$#,## a')}";
label.align = "center";
label.valign = "middle";


var stepSeries = chart.series.push(new am4charts.StepLineSeries());
stepSeries.dataFields.categoryX = "category";
stepSeries.dataFields.valueY = "stepValue";
stepSeries.noRisers = true;
stepSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
stepSeries.strokeDasharray = "3,3";
stepSeries.interpolationDuration = 2000;
stepSeries.sequencedInterpolation = true;

// because column width is 80%, we modify start/end locations so that step would start with column and end with next column
stepSeries.startLocation = 0.1;
stepSeries.endLocation = 1.1;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";