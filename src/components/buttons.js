import React, {useState} from "react";


const Buttons = ({show, system, cabin}) => {
    
    return (
      <div className="App">
          <button onClick={system} className={show ? "button-white": "button-blue"}>Systems</button>
          <button onClick={cabin} className={show ? "button-blue": "button-white"}>Cabin</button>
        </div>
    )
}
export default Buttons;


