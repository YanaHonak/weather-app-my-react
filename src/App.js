import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


import Today from "./today";
/*import Search from "./search";*/
import Footer from "./footer";
import { useState } from "react";
import Forecast from "./forecast";

export default function App() {

console.log("calledApp");

  let [city, setCity] = useState("Nicosia");
  let tmpCity = city;

  function changeCity(e) {
    e.preventDefault();
    /*console.log(city);*/
    if (e.target.value === "") {
      
    } else {
      tmpCity = e.target.value;
    }
  }

  function handleCity(e) {
    e.preventDefault();
    console.log(city);
    setCity(tmpCity);
  }

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let dayWeek = daysOfWeek[today.getDay() - 1]
    /*console.log(dayWeek);*/
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
  return (

    <div className="App">
    
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className=".col-sm-3">
            <h1 id="city">{city}</h1>
            {dayWeek} {today}
            <div className="card">
              <form className="d-flex" role="search" id="search-form">
                <input
                  className="form-control me-md-1"
                  id="search-form-input"
                  type="search"
                  placeholder="Type to search"
                  aria-label="Search"
                  onChange={changeCity}
                ></input>
                <input
                  className="btn btn-outline-primary"
                  type="submit"
                 onClick={handleCity}
                ></input>
              </form>
            </div>
          </div>

          <div className=".col-sm-3">
            <Today city={city} />
          </div>
        </div>

        <br></br>
        <div className="row row-cols-1 row-cols-md-6 g-3">
         <Forecast city={city} />
       

        </div>
        <br></br>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}