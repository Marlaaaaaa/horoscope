import React from "react";

export const DateDrop = ({dateHandler, date}) => {
    return (
        <div>
        <select onChange={ dateHandler} value={date} className='signs' >
            <option  >Today</option>
            <option >Yesterday</option>
            <option  >Tomorrow</option>
  </select>
        </div>
    )
}

export default DateDrop;