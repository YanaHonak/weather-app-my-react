import React from "react";

export default function Search() {
  return (
    <div className="card">
      <form className="d-flex" role="search" id="search-form">
        <input
          className="form-control me-md-1"
          id="search-form-input"
          type="search"
          placeholder="Type to search"
          aria-label="Search"
          value="Nicosia"
        ></input>
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
