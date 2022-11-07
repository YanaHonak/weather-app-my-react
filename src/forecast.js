import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./forecastDay"

export default function Forecast(props) {
 
/*console.log("calledForecast");*/

let [longitude, setLongitude] = useState(null);
let [latitude, setLatitide] = useState(null);

let [loaded, setLoaded] = useState(false);


const [weekForecast, setWeekForecast] = useState([]);


useEffect(()=>{
  setLoaded(false);

},[props.city]);

 
 function getCoordinates(response)
 {
    /*console.log(response.data);*/
    setLongitude(response.data.coord.lon);
    setLatitide(response.data.coord.lat);
    /*console.log(longitude);
    console.log(latitide);*/

 }


 function getForecast(response){
 /* console.log(response.data);*/
 setWeekForecast(response.data.daily);
  /*console.log(weekForecast);*/
  setLoaded(true);

}


if (loaded)
{
 
 return (
  weekForecast.map((day, index)=>{
    if (index<6) {return <ForecastDay id={index} days={day}/>}
    
} 
  ))
   }

 
else

{
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=33a44c83fe16603731dff44e3a24880a&units=metric`;

axios
    .get(url)
    .then(getCoordinates)
    .catch((error) => {
      /*setLoaded(false);*/

    });

let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=33a44c83fe16603731dff44e3a24880a&units=metric`

  axios
    .get(forecastUrl)
    .then(getForecast)
    .catch((error) => {
    /*setLoaded(false);*/

    });

return null;
}

}