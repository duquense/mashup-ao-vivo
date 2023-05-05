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

var chart = am4core.create("chartdiv", am4charts.SlicedChart);
chart.paddingBottom = 30;
chart.data = [{
    "name": "Stage #1",
    "value": 600
}, {
    "name": "Stage #2",
    "value": 300
}, {
    "name": "Stage #3",
    "value": 200
}, {
    "name": "Stage #4",
    "value": 180
}, {
    "name": "Stage #5",
    "value": 50
}, {
    "name": "Stage #6",
    "value": 20
}, {
    "name": "Stage #7",
    "value": 280
}];

var series = chart.series.push(new am4charts.PyramidSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;
series.valueIs = "height";

var colorsSlice = ['#15d1b5', '#15d188', '#fd416a', '#fd41b4', '#fea700', '#fe5a00', '#1657e8'];
series.slices.template.adapter.add("fill", function (fill, target) {
    return colorsSlice[target.dataItem.index];
})