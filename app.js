const weather = document.querySelector(".weather");
const city = document.querySelector("#city");
const btn = document.querySelector("button");
let url;
btn.addEventListener("click", () => {
  url = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city.value}`;
  fetch(url)
    .then((res, rej) => {
      return res.json();
    })
    .then((data) => {
      weather.innerHTML = `<h1>${data.location.name}, ${data.location.region}, ${data.location.country}</h1>
                            <h3>Temperature: ${data.current.temp_c}°C</h3>
                            <h3>Feels Like: ${data.current.feelslike_c}°C</h3>  
                            <h3>Humidity: ${data.current.humidity}%</h3>
                            <h3> Wind Speed: ${data.current.wind_kph} km/h</h3>`;
        
    });
});
{/* <h1 id="city"></h1>
         <h2 id="temperature"></h2> */}