
const apiKey="f0222c3752d9e8aae12ac6ff13194316"
let search=document.querySelector(".search input")
let weatherIcon=document.querySelector(".weather-icon")
let serachBtn=document.querySelector(".search button")
let searchForm=document.querySelector("#search")
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric`


async function weather(city){
    let response=await fetch(apiUrl+`&q=${city}`)
    let data=await response.json()
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main["temp"])+"°C";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".humidity").innerHTML=Math.round(data.main["humidity"])+"%";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"  
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"  
    } 
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"  
    } 
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"  
    }   
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png"  
    } 
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"  
    } 
}




searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let city=search.value.trim()
    weather(city)
    document.querySelector(".weather").style.display="block" 
 
})





