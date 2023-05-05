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
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chart.data = [{
    "name": "The first",
    "value": 600
}, {
    "name": "The second",
    "value": 300
}, {
    "name": "The third",
    "value": 200
}, {
    "name": "The fourth",
    "value": 180
}, {
    "name": "The fifth",
    "value": 50
}, {
    "name": "The sixth",
    "value": 20
}, {
    "name": "The seventh",
    "value": 10
}];

var series = chart.series.push(new am4charts.FunnelSeries());
series.colors.step = 2;
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;

series.labelsContainer.paddingLeft = 15;
series.labelsContainer.width = 200;

var colorsSlice = ['#15d1b5', '#15d188', '#fd416a', '#fd41b4', '#fea700', '#fe5a00', '#1657e8'];
series.slices.template.adapter.add("fill", function (fill, target) {
    return colorsSlice[target.dataItem.index];
})

//series.orientation = "horizontal";
//series.bottomRatio = 1;

chart.legend = new am4charts.Legend();
chart.legend.position = "left";
chart.legend.valign = "bottom";
chart.legend.margin(5, 5, 20, 5);