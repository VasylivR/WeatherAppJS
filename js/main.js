const timeEl = document.querySelector('#time');
const dateEl = document.querySelector('#date');
const currentWeatheritemsEl = document.querySelector('#current-weather-items');
const timeZone = document.querySelector('#time-zone');
const countryEl = document.querySelector('#country');
const weatherForecastEl = document.querySelector('#wether-forecast');
const weatherTempEl = document.querySelector('#current-temp');



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const APT_KFY = 'b8099f0bcd999a86b3b3f127cb22942e'

setInterval (() => {
   const time = new Date();
   const month = time.getMonth();
   const date  = time.getDate();
   const day = time.getDay();
   const hour = time.getHours();
   const hoursIN12HrFormat = hour >= 13 ? hour % 12: hour
   const minutes = time.getMinutes();
   const ampm = hour >-12 ? 'PM' : 'AM'

   timeEl.innerHTML = hoursIN12HrFormat + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`

   dateEl.innerHTML = days[day] + ', ' + date+ ' ' +months[month]

}, 1000);


getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}