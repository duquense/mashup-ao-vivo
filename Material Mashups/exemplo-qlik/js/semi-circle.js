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

var chart = am4core.create("chartdiv", am4charts.PieChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
    {
        country: "Lithuania",
        value: 401
    },
    {
        country: "Czech Republic",
        value: 300
    },
    {
        country: "Ireland",
        value: 200
    },
    {
        country: "Germany",
        value: 165
    },
    {
        country: "Australia",
        value: 139
    },
    {
        country: "Austria",
        value: 128
    }
];
chart.radius = am4core.percent(70);
chart.innerRadius = am4core.percent(40);
chart.startAngle = 180;
chart.endAngle = 360;

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";

series.slices.template.cornerRadius = 10;
series.slices.template.innerCornerRadius = 7;
series.slices.template.draggable = true;
series.slices.template.inert = true;
series.alignLabels = false;

series.hiddenState.properties.startAngle = 90;
series.hiddenState.properties.endAngle = 90;

var colorsSlice = ['#15d1b5', '#15d188', '#fd416a', '#fd41b4', '#fea700', '#fe5a00'];
series.slices.template.adapter.add("fill", function (fill, target) {
    return colorsSlice[target.dataItem.index];
})

chart.legend = new am4charts.Legend();