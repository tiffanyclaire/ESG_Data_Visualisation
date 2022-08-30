import React, { useState, useEffect, useCallback } from 'react';
import {  compareTobacco } from '../utils/compareTobacco.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

function Tobacco ({data}) {

    const [tobacco , settobacco] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });

    const options = {
        plugins:{
          datalabels: {
            display: true,
            color: 'black',
            align: "top",
            anchor: "end",
            offset: 10,
            formatter: function(value, context) {
                return  Math.round(value) + '%'
            }
          }
        }
      };




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


   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Tobacco Producer Weight</h3> 
                <div className="barChart">
                    <Bar data= {tobacco} plugins={[ChartDataLabels]} options={options}/>
                </div>
            </div>
        </div>


    );


}
export default Tobacco