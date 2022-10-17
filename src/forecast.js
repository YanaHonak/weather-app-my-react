import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [wind, setWind] = useState(null);
  /*function showWind(response) {
    setWind(response.data.wind.speed);
  }*/
  let [pressure, setPressure] = useState(null);
  function showPressure(response) {
    setPressure(response.data.main.pressure);
  }
  let [humidity, setHumidity] = useState(null);
  function showHumidity(response) {
    setHumidity(response.data.weather[0].main.humidity);
  }

  function showForecast(response) {
    {
      console.log(response.data);
    }
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=33a44c83fe16603731dff44e3a24880a&units=metric`;
  /*
  axios.get(url).then((response) => {
    if (response.status === "200") {
      console.log(response);
    } else {
      console.log(response);
    }
  });
*/
  return (
    <div className=".col-sm-6" id="forecast">
      <div className="card h-55">
        <div className="card-img-overlay"></div>
        <div className="card-body">
          <div className="clearfix weather-temperature">
            <p className="card-day">Tuesday</p>
            <img src=" " className="float-left" alt=" "></img>
            <span className="card-title" id="today-temperature">
              32°C
            </span>
          </div>

          <p id="description">Being developed</p>
          <p className="card-text">Wind: {wind}km/h</p>
          <p className="card-text">Pressure: {pressure}Mb</p>
          <p className="card-text">Humadity: {humidity}%</p>
        </div>
      </div>
    </div>
  );
}
