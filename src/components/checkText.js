import React from "react";



const Texts = ({bigText, smallText, icon}) => {
    return (
        <div className="row pt-20">

            <div className='icons'>
                <img src={icon}/>
            </div>
            
            <div className='column'>
                <div className='Big'>
                {bigText}
                </div>
                <div className='Small'>
                {smallText}
                </div>
            </div>

        </div>
    )
}

export default Texts