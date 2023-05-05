am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("graf_02", am4charts.PieChart);



chart.data = [{
  "country": "Lithuania",
  "litres": 501.9,
  "color": "#0B1A3A"
},{
  "country": "Germany",
  "litres": 165.8,
  "color": "#1B3E8E"
}, {
  "country": "Australia",
  "litres": 139.9,
  "color": "#2B60DE"
}, {
  "country": "Austria",
  "litres": 128.3,
  "color": "#92ADEE"
}, {
  "country": "UK",
  "litres": 99,
  "color": "#B9CAF4"
}, {
  "country": "Belgium",
  "litres": 60,
  "color": "#E2E9FA"
}];


// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";

// Let's cut a hole in our Pie chart the size of 30% the radius
chart.innerRadius = am4core.percent(30);

// Put a thick white border around each Slice
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 0;
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.slices.template.propertyFields.fill = "color";
pieSeries.slices.template
  // change the cursor on hover to make it apparent the object can be interacted with
  .cursorOverStyle = [
    {
      "property": "cursor",
      "value": "pointer"
    }
  ];


pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;



// Create a base filter effect (as if it's not there) for the hover to return to
var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
shadow.opacity = 0;

// Create hover state
var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

// Slightly shift the shadow and make it more prominent on hover
var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
hoverShadow.opacity = 0.7;
hoverShadow.blur = 5;

var title = chart.titles.create();
title.text = "Inicio";
title.fontSize = 25;
title.marginBottom = 15;
title.marginTop = 15;
title.fill = "#fff";

// Add a legend
chart.legend = new am4charts.Legend();


}); // end am4core.ready()