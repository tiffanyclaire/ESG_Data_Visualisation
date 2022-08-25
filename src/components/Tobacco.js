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
            label: "Tobacco producer, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

    console.log(tobacco, " GENDER CHECK ")
   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Tobacco Producer Weight</h3> 
                <div className="barChart">
                    <Bar data= {tobacco}/>
                </div>
            </div>
        </div>


    );


}
export default Tobacco