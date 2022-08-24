import React, { useState, useEffect, useCallback } from 'react';
import {  compareFossil } from '../utils/compareFossil.js'
import { Bar } from 'react-chartjs-2'

function FossilFuels ({data}) {

    const [fossilFuels , setfossilFuels] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });




    useEffect(() =>{
        const firearms = compareFossil(data);
        setfossilFuels( {
            labels: firearms.labels,
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: firearms.data,
          }]
      
          })
          

    }, [data])
    console.log(fossilFuels);


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <h3 className= "Heading">Fossil Fuels</h3>  
            <Bar data= {fossilFuels}/>
        </div>


    );


}
export default FossilFuels