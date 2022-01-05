import React from 'react'

const Selector = ( { date, setDate, sign, setSign, id } ) => {
    const datas = ["Aries", "Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpius","Sagittarius","Capricorn","Aquarius","Pisces"]
    const day = [ "Today", "Yesterday","Tomorrow" ];


    const signHandler = (e) => {
        setSign(e.target.value)
    }

    const dateHandler = (e) => {
        setDate(e.target.value)
    }


    return <div>
        {id === "sign" ? <select onChange={signHandler} value={sign}>
            {datas.map((el, ind) => <option key={ind}>{el}</option>)}
        </select> : <select onChange={dateHandler} value={date}>
            {day.map((el, ind) => <option key={ind}>{el}</option>)}
        </select>}

    </div>
}

export default Selector;