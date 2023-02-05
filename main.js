let lon;
let lat;
// let city="Paris";
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;
  
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API ID
      const api = "bd3185ceae346533e977e89efe32d56b";
  
      // API URL
      const base =
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bd3185ceae346533e977e89efe32d56b`;
  
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
          Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = 
              `<img src="http://openweathermap.org/img/wn/${icon1}.png"/>`;
        });
    });
  }
});
