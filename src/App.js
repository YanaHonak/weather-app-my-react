import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Forecast from "./forecast";
import Location from "./location";
import Today from "./today";
/*import Search from "./search";*/
import Footer from "./footer";
import { useState } from "react";

export default function App() {
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
    /*console.log(city);*/
    setCity(tmpCity);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className=".col-sm-3">
            <Location city={city} />

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
        <div className="row row-cols-1 row-cols-md-5 g-3">
          
        </div>
        <br></br>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
