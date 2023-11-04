const options = {
    method : 'GET',
    headers :   {
                'X-RapidAPI-Key' : 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
                'X-RapidAPI-Host' : 'weather-by-api-ninjas.p.rapidapi.com'
           }
    };
    
   const getWeather = (city) =>
   {

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city , options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        const sunriseTime = time(response.sunrise)
        const sunsetTime = time(response.sunset)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity 
        humidity2.innerHTML = response.humidity 
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        //wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = sunriseTime
        sunset.innerHTML = sunsetTime
    })
    .catch(err => console.error(err));

  }

  const getWeatherNewYork = () =>
   {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +"New York" , options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        cloud_pctB.innerHTML = response.cloud_pct
        tempB.innerHTML = response.temp
        feels_likeB.innerHTML = response.feels_like
        humidityB.innerHTML = response.humidity 
        min_tempB.innerHTML = response.min_temp
        max_tempB.innerHTML = response.max_temp
        wind_speedB.innerHTML = response.wind_speed
        
    })
    .catch(err => console.error(err));
  }

  const getWeatherLondon = () =>
   {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +"London" , options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        cloud_pctL.innerHTML = response.cloud_pct
        tempL.innerHTML = response.temp
        feels_likeL.innerHTML = response.feels_like
        humidityL.innerHTML = response.humidity 
        min_tempL.innerHTML = response.min_temp
        max_tempL.innerHTML = response.max_temp
        wind_speedL.innerHTML = response.wind_speed
        
    })
    .catch(err => console.error(err));
  }

  const getWeatherSydney = () =>
   {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +"Sydney" , options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
       
        cloud_pctA.innerHTML = response.cloud_pct
        tempA.innerHTML = response.temp
        feels_likeA.innerHTML = response.feels_like
        humidityA.innerHTML = response.humidity 
        min_tempA.innerHTML = response.min_temp
        max_tempA.innerHTML = response.max_temp
        wind_speedA.innerHTML = response.wind_speed
        
    })
    .catch(err => console.error(err));
  }

  const getWeatherBeijing = () =>
   {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +"Beijing" , options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        cloud_pctC.innerHTML = response.cloud_pct
        tempC.innerHTML = response.temp
        feels_likeC.innerHTML = response.feels_like
        humidityC.innerHTML = response.humidity 
        min_tempC.innerHTML = response.min_temp
        max_tempC.innerHTML = response.max_temp
        wind_speedC.innerHTML = response.wind_speed
        
    })
    .catch(err => console.error(err));
  }

  const getWeatherBerlin = () =>
   {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +"Berlin" , options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        cloud_pctK.innerHTML = response.cloud_pct
        tempK.innerHTML = response.temp
        feels_likeK.innerHTML = response.feels_like
        humidityK.innerHTML = response.humidity 
        min_tempK.innerHTML = response.min_temp
        max_tempK.innerHTML = response.max_temp
        wind_speedK.innerHTML = response.wind_speed
        
    })
    .catch(err => console.error(err));
  }


  submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
  })
  let formattedTime="";
     const time = (x) =>
     {
        
        const unixTimestamp = x;
        const date = new Date(unixTimestamp * 1000); 
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        formattedTime = hours % 12 + ":" + minutes.substr(-2) + (hours >= 12 ? " PM" : " AM");
        return formattedTime;
    }

    function handleDelhiClick(c){
      getWeather(c)
    }


console.log(formattedTime);

  getWeatherNewYork()
  getWeatherLondon()
  getWeatherSydney()
  getWeatherBeijing()
  getWeatherBerlin()

  getWeather("Indore")
 


  

