import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import ApiReq from "./components/apireq";
import Select from "./components/selector";
import { SignCenter } from "./components/sign-center";
import { LeftBar } from "./components/leftBar";
import { Center } from "./components/center";
import { Arrow } from "./components/right";
import { ArrowIcon } from "./icons/arrowIcon";

const App = () => {

  const [data, setData] = useState()
  const [center, setCenter] = useState(false);
  const [sign, setSign] = useState('Aries')
  const [date, setDate] = useState('Today')

  const search = () => {
    setCenter(true);
  };
  const back = () => {
    setCenter(false)
  }
 
  console.log(sign)
  console.log(date)
  console.log(data)
return (
  <div>
      
        <div className="bg">
          <div className="hrc">HOROSCOPE</div>
          <div className="row center-y">
            <div className="left">
              <LeftBar />
            </div>
            {center ? (
            <><ApiReq setData={setData} data={data} date={date} sign={sign} />
              <SignCenter data={data} />
            <div className='inrow' onClick={back}></div>
              </>)
              : (<><Center sign={sign} date={date} setSign={setSign} setDate={setDate}/>
          <div onClick={search}>
            <ArrowIcon />
          </div></>)}

            </div>
          </div>
        </div>
    
);
 

};
export default App;
/* const [data, setData] = useState();
  const [ sign, setSign ] = useState('Aries');
  const [ date, setDate ] = useState('Yesterday');
  return (
    <div className='bg'>
       <div className="hrc">HOROSCOPE</div>
       <div className='row '>
       <div className="left">
          <LeftBar />
        </div>
      
      <SignCenter/>
       </div>
      
    </div>
  );
};*/
