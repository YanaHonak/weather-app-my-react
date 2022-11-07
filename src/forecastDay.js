import React from "react";


export default function ForecastDay(props) {

    /*console.log("calledForecastByDay");*/

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


    let day = new Date(props.days.dt * 1000);
    /*console.log(day.getDay());*/
    let dayOfTheWeek = daysOfWeek[day.getDay()]

    let iconUrl = `http://openweathermap.org/img/wn/` + props.days.weather[0].icon + `@2x.png`;
    let temp = Math.round(props.days.temp.eve);

    return (

        <div className=".col-sm-6" id="forecast">
            <div className="card h-55">
                <div className="card-img-overlay"></div>
                <div className="card-body">
                    <div className="clearfix weather-temperature">
                        <p className="card-day">{dayOfTheWeek}</p>
                        <div>
                            <img src={iconUrl} id="icon" className="float-left" alt=" "></img>
                            <span className="card-title" id="today-temperature">
                                {temp}
                            </span>
                        </div>
                    </div>
                    <p id="description"></p>
                    <p className="card-text">Wind: {props.days.wind_speed} km/h</p>
                    <p className="card-text">Pressure: {props.days.pressure} Mb</p>
                    <p className="card-text">Humadity: {props.days.humidity} %</p>
                </div>
            </div>
        </div>)
}