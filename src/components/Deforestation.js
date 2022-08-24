import React, { useState, useEffect, useCallback } from 'react';
import {  compareDeforestConsumer } from '../utils/compareDeforestConsumer.js'
import { Bar } from 'react-chartjs-2'

function Deforestation ({data}) {

    const [deforestation , setdeforestation] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });




    useEffect(() =>{
        const deforest = compareDeforestConsumer(data);
        setdeforestation( {
            labels: deforest.labels,
            datasets: [{
            label: "dhjhdthyht ",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

    console.log(deforestation, " GENDER CHECK ")
   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <h3 className= "Heading">Deforestation Consumer Brand</h3>  
            <Bar data= {deforestation}/>
        </div>


    );


}
export default Deforestation