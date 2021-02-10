import React from "react";
import spinner from "../../images/spinner.gif";
import "./Spinner.css";

function Spinner({ loading }) {
  return (
    <div className="spinnerWrapper">
      <div className={loading ? "spinner" : "hide"}>
        <img src={spinner} alt="Loading..." />
      </div>
    </div>
  );
}

export default Spinner;
