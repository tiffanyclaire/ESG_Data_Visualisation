import React, { useState, useEffect, useCallback } from 'react';
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { get_weight } from '../utils/getWeight.js'

function FossilFuels ({data, names}) {

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

      // getting three datasets
    const prison1 = get_weight(data, "Fossil Free Funds: Coal industry, weight"); 
    const prison2= get_weight(data, "Fossil Free Funds: Oil / gas industry, weight");
    const prison3 = get_weight(data, "Fossil Free Funds: Fossil-fired utilities, weight");

    
    const fossilComparison = {
        labels: names,
        datasets: [{
        label: "Coal",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Oil/Gas",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Utilities",
        data: prison3,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      }
        ]
      }



    return (
        <div style= {{width:'90%', padding: '5%'}}>

            <div className= "containerLarge">  
                <h3 className= "Heading">Fossil Fuels</h3> 
                <div className= "barChart">
                    <Bar data= {fossilComparison} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>
        </div>


    );


}
export default FossilFuels