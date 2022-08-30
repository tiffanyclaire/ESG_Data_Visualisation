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
            label: "Fossil fuel holdings, weight",
            data: firearms.data,
          }]
      
          })
          

    }, [data])
    console.log(fossilFuels);


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Fossil Fuels</h3> 
                <div className= "barChart">
                    <Bar data= {fossilFuels}/>
                </div> 
            </div>
        </div>


    );


}
export default FossilFuels