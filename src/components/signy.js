import React from "react";


const Signnn = ({coloru,colortext,color}) => {
    return(
        <div className="square">
            <div className='container'>
                <div className='ellipse'>
                    <div className='color'>{coloru}</div>
                    <div className='blue' style={{color: color}}>{colortext}</div>
                </div>
            </div>
        </div>


    )
}

export default Signnn