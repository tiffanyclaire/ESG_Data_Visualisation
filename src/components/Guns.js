import React, { useState, useEffect} from 'react';
import {  compareCivilian } from '../utils/compareCivilian.js'
import { Bar } from 'react-chartjs-2'

function Guns ({data}) {

    const [civilianFirearms, setcivilianFirearms] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });




    useEffect(() =>{
        const firearms = compareCivilian(data);
        setcivilianFirearms( {
            labels: firearms.labels,
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: firearms.data,
          }]
      
          })
          

    }, [data])
    console.log(civilianFirearms);


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <h3 className= "Heading">Civilian Firearms</h3>  
            <Bar data= {civilianFirearms}/>
        </div>


    );


}
export default Guns