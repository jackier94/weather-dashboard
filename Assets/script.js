var appID = "ff727016aee5a2a2849f42249f529bd4";
$(document).ready(function () {
  // var appID = "ff727016aee5a2a2849f42249f529bd4";
  console.log(appID);

  $(".query_btn").click(function () {
    var query_param = $(this).prev().val();

    // var latitude = query_param.coord[0];
    // console.log(latitude);

    // var fiveWeather =
    //   "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}";

    // console.log(query_param);

    if ($(this).prev().attr("placeholder") == "City") {
      var weather =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        query_param +
        "&APPID=" +
        appID +
        "&units=imperial";
    } else if ($(this).prev().attr("placeholder") == "Zip Code") {
      var weather =
        "http://api.openweathermap.org/data/2.5/weather?zip=" +
        query_param +
        "&APPID=" +
        appID;
      console.log(weather);
    }

    $.getJSON(weather, function (json) {
      $("#city").html(json.name);
      $("#main_weather").html(json.weather[0].main);
      $("#description_weather").html(json.weather[0].description);
      $("#weather_image").attr(
        "src",
        "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
      );
      $("#temperature").html(json.main.temp);
      // $("#temperature").text($("#temperature").text() * (9 / 5) + 32);
      $("#pressure").html(json.main.pressure);
      $("#humidity").html(json.main.humidity);
      $("#speed").html(json.wind.speed);

      // Here I am trying to append the list of cities being search to the div...

      function listCities() {
        $("#appendcity").prepend("<ul>" + query_param + "</ul>");
        $("#appendcity").text("<ul>" + query_param + "</ul>");
        $("#city-list").append("<ul>" + query_param + "</ul>");
      }
    });
  });

  //   /
});

// 5 weather forecast

function forecast() {
  var query_param = $(this).prev().val();
  var forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" + query_param + appID;
  $.ajax({
    url: forecastURL,
    method: "GET",
  }).then(function (response) {
    var iconCode = response.list[4].weather[0].icon;
    // console.log(forecastURL);
    // console.log(response);
  });
}
// $(document).ready(function () {
//   var appID = "ff727016aee5a2a2849f42249f529bd4";
//   console.log(appID);

//   $(".query_btn").click(function () {
//     var query_param = $(this).prev().val();

//     var fiveDaysURL =
//       "api.openweathermap.org/data/2.5/forecast?q=" +
//       query_param +
//       "&appid=" +
//       appID;

//     $.ajax({
//       url: fiveDaysURL,
//       method: "GET",
//     }).then(function (response) {
//       // write for loop

//       console.log(main.temp);
//     });
//   });
// });

// // UV index function

// // function()
// // http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
