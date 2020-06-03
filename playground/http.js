// no npm http

const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=6456b2e782ada34c2a76c1fbfb98dc57&query=45,-75&units=m";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
