// website := https://openweathermap.org/api

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let input = document.getElementById("ip");
let city = document.getElementById("wCity");
let temp = document.getElementById("wTemp");
let desc = document.getElementById("wDesc");
let wind = document.getElementById("wind");
let search = document.getElementById("srch");
let weather =
 {
    apikey : "ef2fe699961bf47a150e6ac8e71810d6",
    fetchWeather : function(city) 
    {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city  
            + "&units=metric&appid=" 
            + this.apikey
        ).then((res)=> res.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data)
    {
        let weathername = data.name;
        let  weathertemp = data.main.temp;
        let  weatherwind = data.wind.speed;
        let  weatherdesc = data.weather[0].main;

        city.innerHTML = `Weather In ${weathername}`;
        temp.innerHTML = `${weathertemp}°C`;
        desc.innerHTML = `${weatherdesc}`;
        wind.innerHTML = `Wind Speed in ${weathername} : ${weatherwind}`;

    }
}

search.addEventListener("click",function(event)
{
    console.log(data);    
    weather.fetchWeather(search.value);
   
})