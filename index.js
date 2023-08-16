// const weatherData = {
//   location: {
//     name: "Milan",
//     region: "Lombardia",
//     country: "Italy",
//     lat: 45.47,
//     lon: 9.2,
//     tz_id: "Europe/Rome",
//     localtime_epoch: 1688486330,
//     localtime: "2023-07-04 17:58",
//   },
//   current: {
//     last_updated_epoch: 1688485500,
//     last_updated: "2023-07-04 17:45",
//     temp_c: 29.0,
//     temp_f: 84.2,
//     is_day: 1,
//     condition: {
//       text: "Partly cloudy",
//       icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//       code: 1003,
//     },
//     wind_mph: 4.3,
//     wind_kph: 6.8,
//     wind_degree: 160,
//     wind_dir: "SSE",
//     pressure_mb: 1013.0,
//     pressure_in: 29.91,
//     precip_mm: 0.1,
//     precip_in: 0.0,
//     humidity: 45,
//     cloud: 25,
//     feelslike_c: 34.0,
//     feelslike_f: 93.3,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     uv: 6.0,
//     gust_mph: 4.0,
//     gust_kph: 6.5,
//   },
// };


const tempRef = document.querySelector('.temp');
const locationref = document.querySelector('.time_location p');
const timedateRef = document.querySelector('.time_location span');
const conditionref = document.querySelector('.weather_condition span');
const imgref = document.querySelector('.weather_condition img');
console.log(timedateRef.innerHTML);

function renderweatherdata(weatherData){
    tempRef.innerText = weatherData.current.temp_c;
    // locationref.innerText = weatherData.location.name;
    timedateRef.innerText = timeDateDetails(weatherData.location.localtime,weatherData.current.is_day);
    conditionref.innerText = weatherData.current.condition.text;
    imgref.src = weatherData.current.condition.icon;
}


 function timeDateDetails(time,day){
    const timearr = time.split(' ');
    const result = timearr[1] +' ' + day +' '+timearr[0];
    return result;
 }

 const formRef = document.querySelector('form');
 const searchField = document.querySelector('.searchField');
 formRef.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue = searchField.value;
    locationref.innerText = inputValue;
    // renderweatherdata(weatherData);
    fetchWeatherData(inputValue);
    searchField.value = "";

 })

 function fetchWeatherData(location){
  fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`)
      .then((res)=> res.json())
      .then((data) => renderweatherdata(data))
      .catch((err)=>console.log('error ',err));
 }



