import React from "react";
import Signnn from "./signy";


export const SignCenter = ({ data }) => {
    return(
        <div className="sigh-col ">
            <div className="sigh">
            <Signnn  colortext={data?.color}  coloru="color" color={data?.color} />
            <Signnn  colortext={data?.lucky_time} coloru="lucky time" color="#96E27B" />
            <Signnn  colortext={data?.lucky_number} coloru="lucky number" color="#AD7A4B" />
            <Signnn  colortext={data?.mood} coloru="mood" color="#74CCBC" />
            <Signnn  colortext={data?.compatibility} coloru="compatibility" color="#C65858" />
            </div>
            <div className='description'>
            {data?.description}
            </div>
        </div>
    )

}
export default SignCenter;