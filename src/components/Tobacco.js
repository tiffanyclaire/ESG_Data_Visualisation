import React, { useState, useEffect, useCallback } from 'react';
import {  compareTobacco } from '../utils/compareTobacco.js'
import { Bar } from 'react-chartjs-2'

function Tobacco ({data}) {

    const [tobacco , settobacco] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });




    useEffect(() =>{
        const deforest = compareTobacco(data);
        settobacco( {
            labels: deforest.labels,
            datasets: [{
            label: "dhjhdthyht ",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

    console.log(tobacco, " GENDER CHECK ")
   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <h3 className= "Heading">Tobacco Producer Weight</h3>  
            <Bar data= {tobacco}/>
        </div>


    );


}
export default Tobacco