import React, {useState , useEffect} from "react";
import axios from 'axios';

const ApiReq = ({sign, date, setData}) => {
    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params: {sign: sign, day: date},
            headers: {
                'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
                'x-rapidapi-key': '41d9f3ec2bmsh0deceec67d168ddp19bdccjsnccadb20f7e8f'
            }
        };

      axios.request(options).then((response) => {
          setData(response.data)
      }).catch((error) => {
          console.error(error);
      });
    }, []);
  return (
    <></>
  );
};

export default ApiReq;