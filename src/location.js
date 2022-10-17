import React from "react";

export default function Location(props) {
  return (
    <div>
      <h1 id="city">{props.city}</h1>
      <ul>
        <li id="date">Saturday, 15:6</li>
      </ul>
    </div>
  );
}
