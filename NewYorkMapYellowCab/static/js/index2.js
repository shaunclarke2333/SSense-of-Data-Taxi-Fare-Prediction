var myMap = L.map("map", {
    center: [40.7128, -74.0060],
    zoom: 12

 })
 // Adding tile layer
 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
 }).addTo(myMap);

 var nyLink = "static/js/beer_business_cordinates.geojson"
 var taxiLink = "static/js/train_df_cordinates_dates_separated.geojson"
 var myMapStyle = {
    color: "white",
    fillColor: "pink",
    fillOpacity: 0.5,
    weight: 1.5
 }
 
 //var marker = L.marker()
 
 //d3.json(nyLink, function(myData){
 // console.log(myData)
 // L.geoJson(myData, {
  //    style: myMapStyle

 // }).addTo(myMap)

  // Creating a geoJSON layer with the retrieved data
// Function that will determine the color of a neighborhood based on the Rating it belongs to

  //Taxi
  function choosePickupTime(pickup_hour) {
    console.log(pickup_hour);
    switch (pickup_hour) {
    case (pickup_hour >= '0' || pickup_hour < '3'):
      return "Red";
    case (pickup_hour >= '3' || pickup_hour < '6'):
      return "Blue";
    case (pickup_hour >= '6' || pickup_hour < '9'):
      return "Orange";
    case (pickup_hour >= '9' || pickup_hour < '12'):
      return "Purple";
    case (pickup_hour >= '12' || pickup_hour < '14'):
        return "Light Pink";
    case (pickup_hour >= '14' || pickup_hour < '18'):
        return "Light Pink";
    case (pickup_hour >= '18' || pickup_hour < '23'):
        return "Light Pink";
    default:
      return "Yellow";
    }
  }
 
//taxi
d3.json(taxiLink, function(taxiData){
  console.log(choosePickupTime(taxiData.features[1].properties.pickup_hour));

  L.geoJson(taxiData, {
      // Style each feature (in this case a neighborhood)
      style: function(feature) {
          console.log(feature)
          var pickup_hour = feature.properties.pickup_hour;
              return {
                  color: choosePickupTime(pickup_hour)
              };
  
      },

      // Change Map Colors Based on pickup_time.
      onEachFeature: function (feature, layer) {
       layer.bindPopup("<h1>" + "Pickup Date" + feature.properties.pickup_date + "</h1><hr><h2>" + "Passenger Count: " + feature.properties.passenger_count + "</h2> <hr> <h2>" + "Destination: " + feature.properties.latitude + feature.properties.longitude + "</h2>");
       },
       pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, {
              radius: Math.round(5),
              fill: true,
              fillOpacity: 0.7
          }); 
          }
      }).addTo(myMap);
   });
