import React from "react";
import "./Square.css";

const Square = ({onClick, value}) => {

    return (
      <button className="Square" 
      onClick={onClick}>
        {value}
      </button>
    )
  
}
export default Square;