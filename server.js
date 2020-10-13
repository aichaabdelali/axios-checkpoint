const axios = require("axios");
const { response } = require("express");
const express = require("express");
const app = express();
const port = 4001;

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server is runing on ${port}`);
});
let city_name = "London";
app.get("/", function (req, res) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=80ad75f1b05c83787f4bf3956165deca`
    )
    .then((response) => {
      res.send(
        "<html><body>" +
          "<h1>The Wather in " +
          city_name +
          "</h1>" +
          "<h4> temperature: " +
          response.data.main.temp +
          "</h4>" +
          "<h4> description: " +
          response.data.weather[0].description +
          "</h4>" +
          "</body></html>"
      );
    })
    .catch(function (err) {
      console.log(err);
    });
});
