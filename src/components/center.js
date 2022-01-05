import React from "react";
import { DateDrop } from "./datedrop";
import SignDrop from './signdrop'

export const Center = ( { setSign, setDate, sign , date } ) => {

  const SignDrophandler = (e) => {
    setSign(e.target.value)
  }

  const dateHandler = (e) => {
    setDate(e.target.value)
  }

  return (
    <div className="hi">
      <div className="sign">
        sign
        <SignDrop sign={sign} SignDrophandler={SignDrophandler} />
      </div>
      <div className="date">
        date
        <DateDrop date={date} dateHandler={dateHandler} />
      </div>
    </div>
  );
};