import React from "react";

const SignDrop = ({ SignDrophandler, sign }) => {
    return (
        <div>
            <select onChange={SignDrophandler} value={sign} className='signs' >
                    <option >Aries</option>
                    <option  >Taurus</option>
                    <option  >Gemini</option>
                    <option >Cancer</option>
                    <option  >Leo</option>
                    <option  >Virgo</option>
                    <option >Libra</option>
                    <option >Scorpio</option>
                    <option >Sagittarius</option>
                    <option >Capricorn</option>
                    <option >Aquarius</option>
                    <option >Pisces</option>
                </select>
        </div>
    )
}
export  default SignDrop