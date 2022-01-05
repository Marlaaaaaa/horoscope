import React, {useState} from "react";
import Texts from "./checkText";
import Buttons from "./buttons"
import ci from '../icons/Check Icon.svg'
import co from '../icons/Check Icon orange.svg'
import cg from '../icons/Check Icon green.svg'
import model from '../icons/SpaceX 3D Model Render.svg'

export const LeftBar = () => {
  const cabin =() => {
    setShow(false)
  }
  const system =() => {
    setShow(true)
  }
  const [show, setShow] = useState(false);

    return (
      
        <div>  
          <div> 
            {show ? <><Texts bigText = { "All Systems Check"} smallText="Normal" icon={ci}/>
            <Texts bigText = { "RENDEZVOUS BURN SLOW" } smallText="Normal" icon={ci}/>
            <Texts bigText = { "PREPARE RENDEZVOUS BURN" } smallText="Normal" icon={ci}/>
            <Texts bigText = { "THERMAL SHIELD" } smallText="Applied" icon={cg} />
            <Texts bigText = { "BURN Go/No-GO" } smallText="Normal" icon={ci}/>
            <Texts bigText = { "POWER COMPLETION" } smallText="Awaiting" icon={co}/>
            <Texts bigText = { "STATION DECK CHECK" } smallText="Normal" icon={ci}/> </> 
            :
            <img src={model}/>
            }
          </div>
            
            <Buttons  show={show} system={system} cabin={cabin}/>
        </div>
    )
}

