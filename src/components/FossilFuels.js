import React, { useState, useEffect, useCallback } from 'react';
import {  compareFossil } from '../utils/compareFossil.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

function FossilFuels ({data}) {

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
                    <Bar data= {fossilFuels} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>
        </div>


    );


}
export default FossilFuels