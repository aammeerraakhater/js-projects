const APIkey="1277d6c33134390d27d3f802590d3cf5";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search-box');
var city='egypt';

searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    checkWeather(searchbox.value);
  }
}

async function checkWeather(city){

  const response = await fetch(APIURL + city + `&appid=${APIkey}`) ;

  if(response.status==404){
    document.querySelector(".city").innerHTML= "Invalid city";
    document.querySelector(".current").style.display = "none"
  }else{
    var data = await response.json();
    console.log(data);

    document.querySelector(".current").style.display = "block"
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".hi-low").innerHTML= Math.round(data.main.temp_max) + "°c / " + Math.round(data.main.temp_min) + "°c";
    document.querySelector(".windSpeed").innerHTML= data.wind.speed + "Km/hr";

  }
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
}
function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
checkWeather(city);
