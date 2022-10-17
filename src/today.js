import React, { useState } from "react";
import axios from "axios";

export default function Today(props) {
  let [temperature, setTemperature] = useState(0);
  let [wind, setWind] = useState(null);
  let [pressure, setPressure] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [icon, setIcon] = useState(null);

  function showToday(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setPressure(response.data.main.pressure);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/` +
        response.data.weather[0].icon +
        `@2x.png`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=33a44c83fe16603731dff44e3a24880a`;
  axios
    .get(url)
    .then(showToday)
    .catch((error) => {
      setTemperature(0);
      setHumidity(0);
      setPressure(0);
      setWind(0);
      console.log("error");
    });

  return (
    <div className="card h-55">
      <div className="card-img-overlay"></div>
      <div className="card-body">
        <div className="clearfix weather-temperature">
          <p className="card-today">Today</p>
          <div>
            <img src={icon} id="icon" className="float-left" alt=" "></img>

            <span className="card-title" id="today-temperature">
              {temperature}
            </span>
          </div>
        </div>
        <p id="today-description">few clouds</p>
        <p className="card-text" id="wind">
          Wind: {wind} km/h
        </p>
        <p className="card-text" id="presipation">
          Pressure: {pressure} mB
        </p>
        <p className="card-text" id="today-humidity">
          Humidity: {humidity} %
        </p>
      </div>
    </div>
  );
}
