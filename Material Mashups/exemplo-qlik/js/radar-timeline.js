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

/**
 * This is a copy of a chart created by Antti Lipponen: https://twitter.com/anttilip?lang=en Thanks a lot!
 */

// disclaimer: this data is not accuarate, don't use it for any puroposes
// first temperature is average for 1973-1980 period

var temperatures = {
    "EUROPE": [
        ["Albania", 17.89, 3.61, 1.61, 1.61, 1.11, 3.36, 3.36, -0.36, -2.26, -2.32, -2.36, -2.41, -2.55, -2.05, -1.49, -1.91, -2.52, -2.03, -1.05, -11.23, -11.23, -11.23, -11.23, -11.23, -11.23, -11.23, -11.23, -5.59, -5.59, -5.59, -5.59, -5.59, -5.59, -5.59, 1.11, 0.96, 0.96, 0.96, 0.96, 0.96, 1.48, -1.71, -1.14, -0.57, -0.84],
        ["Austria", 6.9, -0.33, 0.18, 0.36, -0.05, 0.42, -0.55, -0.13, -0.84, -0.14, 0.38, 0.72, -0.47, -0.27, 0.03, -0.17, 0.57, 0.94, 0.88, -0.02, 1.49, 0.82, 2.08, 0.75, -0.26, 0.95, 1.03, 1.05, 1.85, -0.87, 0.43, 0.26, -0.62, -0.83, -0.08, -0.1, 0.62, 0.58, -0.39, 0.53, 0.22, 0.27, 0.86, 0.89, 0.75],
        ["Belgium", 10.32, -0.07, 0.23, 0.15, 0.73, 0.11, -0.5, -0.88, -0.64, -0.29, 0.67, 0.49, -0.27, -0.82, -0.62, -0.82, 0.49, 1.08, 0.99, -0.15, 0.56, -0.07, 0.91, 0.98, -0.92, 0.65, 0.38, 0.94, 1.72, 1.53, 1.93, 2.29, 1.94, 2.53, 1.74, 2.07, 1.78, 1.76, 1.18, 2.93, 2.29, 0.92, 2.63, -5.37, -4.61]
    ],
    "AFRICA": [
        ["Algeria", 16.99, 0.55, 0.09, 0.44, -4.27, 0.58, 0.28, 0.93, 0.58, -0.5, 2.37, -1.47, 1.45, 1.74, 1.34, 2.07, 0.91, 0.61, 1.84, 0.71, 0.54, 0.36, 2.18, 2.28, 1.93, 4.09, 1.03, 1.77, 1.32, 2.72, 1.51, 2.68, 1.43, 1.82, 2.62, 1.64, 1.72, 3.03, 1.88, 2.16, 2.45, -0.54, 3.03, 1.52, 3.32],
        ["Angola", 23.86, 1.64, 0.58, -0.54, 0.37, 0.96, 0.56, 0.56, 0.56, -1.61, -1.94, -1.94, -1.94, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, -2.46, 0.86, 1.81, 0.79, 0.18, 0.64, 1.38, 1.98, 0.65, 0.65, 0.09, 3.67, 5.14, 5.14, 2.62, 1.91, 2.57],
        ["Botswana", 21.64, 0.33, -1.11, -0.36, -0.7, -0.1, -0.26, 0.24, -0.92, -0.77, 0.58, 0.88, 0.68, 0.33, -1.9, 1.8, 1.41, 0.3, 2.82, 0.84, 0.3, 0.98, 1.19, 2.32, 1.36, 1.64, 1.68, 2.41, 0.34, 1.46, 2.44, 1.63, 0.87, 2.18, 0.41, 0.84, 0.64, 0.58, 1.6, 0.89, 0.87, 0.83, 0.24, 1.09, 2.2],
    ],
    "AMERICA": [
        ["Argentina", 17.19, -1.68, -0.6, -0.49, 0.73, -0.41, 1.13, -0.53, -0.19, -0.29, 2.62, -0.62, -1.66, -1.17, -0.91, -0.73, -0.47, -0.09, -0.35, -0.64, -0.86, -0.61, -0.07, -0.58, -0.39, -0.38, 0.16, -0.42, -0.87, 0.25, -0.21, -0.17, 0.33, -0.01, 0.19, -0.3, -0.05, 0.65, 0.06, 0.22, 0.66, 0.29, 0.31, 0.27, -0.53],
        ["Belize", 26.31, -0.53, -0.4, -1.28, 0.14, -0.47, -0.68, 0.87, 0.77, 0.36, 0.42, 0.79, -0.91, 0.84, 0.56, 0.09, 0.58, 0.11, 0.38, 0.38, 0.34, 0.21, 0.61, -1.36, 0.67, 1.13, 1.12, -0.09, 0.11, 0.58, 0.94, 0.92, 0.5, 1.14, 0.84, 0.98, 0.68, 0.78, 0.75, 0.68, 0.47, 0.95, 0.66, 1.19, 1.23],
        ["Brazil", 25.75, 0.43, -1.64, -0.21, 0.72, 0.73, 0.14, -1.11, 0.01, -0.41, 1.15, 0.39, 0.25, 0.32, 0.75, 0.36, 0.23, 0.35, 0.55, 0.37, 0.59, 0.57, 0.58, 0.99, 0.53, 0.29, 0.46, 0.64, 0.68, 0.73, 0.37, 0.23, -1.12, 0.39, -0.63, 0.44, -0.03, -0.18, 0.34, 0.26, 0.16, 0.68, -1.71, -2.25, -0.23],
    ],
    "ASIA": [
        ["Armenia", 9.14, -2.47, -5.54, 2.91, -9.13, -3.98, 1.3, 1.79, 4.56, 2.72, -0.64, -6.61, -2.99, -0.93, -1.88, -1.64, -2.48, 0.19, -0.03, 0.23, -5.73, -5.01, -3.64, -3.24, -3.11, -3.73, -3.69, -4.82, -7.09, -6.27, -6.48, -3.68, -0.06, -7.24, -1.48, -1.65, -3.22, -3.04, -0.34, -3.41, -1.92, -2.47, -4.29, 0.52, 0.26],
        ["Bangladesh", 24.84, 0, 0, 0, 0, -0.34, 2.28, 0.68, -0.08, -1.43, -0.16, 0.02, 0.08, 0.75, 0.44, 0.3, 0.23, 0.57, 0.71, 0.72, 1.05, 0.69, 0.39, 0.72, -0.07, -4.22, 2.03, 2.57, 0.93, 3.94, 1.04, 4.21, 2.68, 0.63, 1.08, 2.64, 1.63, -0.26, 2.41, 2.42, 3.28, -4.2, 1.99, 1.44, 1.65],
        ["Burma", 25.69, -0.13, 0.29, -0.57, -0.67, 0.08, -0.53, -0.38, 0.47, -0.58, 0.03, 1.46, 0.12, 0.46, 2.83, -0.25, -1.51, -1.79, 0.1, 0.49, -0.76, 0.63, 1.2, 0.84, 1.38, -0.34, 2.09, 1.39, 0.89, 1.02, 1.14, 0.22, 0.67, 1.26, 1.56, 0.99, 0.73, 1.33, 1.45, 0.62, 0.64, 0.94, 1.16, 0.9, 0.44],
    ],
    "OCEANIA": [
        ["Australia", 18.38, 0.36, -0.34, -0.14, -0.48, -0.08, -0.34, 0.3, 0.57, 0.12, -0.11, 0.1, -0.62, -0.21, -0.44, -0.13, 0.56, -0.31, -0.26, -0.18, -0.66, -0.38, -0.44, -0.61, -0.59, -0.35, -0.11, -0.29, -0.29, -0.21, 0.19, 0.11, -0.02, 0.28, -0.06, 0.26, -0.21, 0.41, 0.01, -0.18, -0.18, 0.56, 0.48, 0.27, 0.41],
        ["Fiji", 26.11, 0, 0, 0, 1.39, 1.39, 1.39, -1.22, 0.79, -0.77, -0.77, -0.77, 1.39, 1.39, 1.39, -1.72, 1.27, -0.96, -0.66, -0.39, 0.97, -1.45, -1.12, -0.58, -0.54, -0.82, 0.27, 0.12, 0.58, 0.17, 0.71, 0.07, 0.19, 0.21, 0.11, 0.51, 0.04, -0.41, 0.42, 0.42, 0.18, 0.38, 0.19, -0.02, 0.45],
        ["French Polynesia", 25.11, 0, 0, 0, 1.14, 1.14, 1.14, -0.19, 0.03, -0.3, -0.33, -0.19, -0.15, -0.01, -0.06, -0.08, 0.13, -0.04, 0.11, -0.06, 0.26, 0.09, -0.02, 0.27, -0.05, 0.06, 0.23, 0.34, 0.24, 0.22, 0.55, 0.36, 0.28, 0.19, 0.48, 0.32, 0.07, 0.51, 0.29, 0.22, -0.09, 0.01, -0.05, 0.37, 0.45],
    ]
}

var startYear = 1973;
var endYear = 2016;
var currentYear = 1995;
var colorSet = new am4core.ColorSet();

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.numberFormatter.numberFormat = "+#.0°C|#.0°C|0.0°C";
chart.hiddenState.properties.opacity = 0;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

chart.padding(5, 15, 5, 10)
chart.radius = am4core.percent(65);
chart.innerRadius = am4core.percent(40);

// year label goes in the middle
var yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.fill = am4core.color("#673AB7");
yearLabel.fontSize = 30;
yearLabel.text = String(currentYear);

// zoomout button
var zoomOutButton = chart.zoomOutButton;
zoomOutButton.dx = 0;
zoomOutButton.dy = 0;
zoomOutButton.marginBottom = 15;
zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
chart.scrollbarX.align = "center";
chart.scrollbarX.exportable = false;

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = "vertical";
chart.rightAxesContainer.padding(120, 20, 120, 20);

// category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";

var categoryAxisRenderer = categoryAxis.renderer;
var categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 28;
categoryAxisLabel.relativeRotation = 90;

categoryAxisRenderer.fontSize = 11;
categoryAxisRenderer.minGridDistance = 10;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = -3;
valueAxis.max = 6;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0;
valueAxis.tooltip.animationDuration = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.zIndex = 10;

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 20;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;


// series
var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(90);
series.columns.template.strokeOpacity = 0;
series.dataFields.valueY = "value" + currentYear;
series.dataFields.categoryX = "country";
series.tooltipText = "{categoryX}:{valueY.value}";

// this makes columns to be of a different color, depending on value
series.heatRules.push({ target: series.columns.template, property: "fill", minValue: -3, maxValue: 6, min: am4core.color("#673AB7"), max: am4core.color("#F44336"), dataField: "valueY" });

// cursor
var cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = "zoomX";

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.2;
cursor.lineX.fill = am4core.color("#000000");
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;

// year slider
var yearSliderContainer = chart.createChild(am4core.Container);
yearSliderContainer.layout = "vertical";
yearSliderContainer.padding(0, 38, 0, 38);
yearSliderContainer.width = am4core.percent(100);

var yearSlider = yearSliderContainer.createChild(am4core.Slider);
yearSlider.events.on("rangechanged", function () {
    updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
})
yearSlider.orientation = "horizontal";
yearSlider.start = 0.5;
yearSlider.exportable = false;

chart.data = generateRadarData();

function generateRadarData() {
    var data = [];
    var i = 0;
    for (var continent in temperatures) {
        var continentData = temperatures[continent];

        continentData.forEach(function (country) {
            var rawDataItem = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
                rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
        });

        createRange(continent, continentData, i);
        i++;

    }
    return data;
}


function updateRadarData(year) {
    if (currentYear != year) {
        currentYear = year;
        yearLabel.text = String(currentYear);
        series.dataFields.valueY = "value" + currentYear;
        chart.invalidateRawData();
    }
}

function createRange(name, continentData, index) {

    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first country
    axisRange.category = continentData[0][0];
    // last country
    axisRange.endCategory = continentData[continentData.length - 1][0];

    // every 3rd color for a bigger contrast
    axisRange.axisFill.fill = colorSet.getIndex(index * 3);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;
    axisRange.label.bent = true;

    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -20; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
        var dataItem = event.target.dataItem;
        if (!event.target.isActive) {
            categoryAxis.zoom({ start: 0, end: 1 });
        }
        else {
            categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
        }
    })

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("#ffffff");
    axisLabel.radius = 3;
    axisLabel.relativeRotation = 0;
}

var slider = yearSliderContainer.createChild(am4core.Slider);
slider.start = 1;
slider.exportable = false;
slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
});

var colorsSlice = ['#15d1b5', '#fd416a', '#fea700', '#1657e8', '#15d1b5', '#fd416a', '#fea700', '#1657e8', '#15d1b5', '#fd416a', '#fea700', '#1657e8', '#15d1b5', '#fd416a', '#fea700'];
series.columns.template.adapter.add("fill", function (fill, target) {
    return colorsSlice[target.dataItem.index];
})

