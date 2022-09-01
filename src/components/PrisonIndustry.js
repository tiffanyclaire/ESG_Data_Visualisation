import React, { useState, useEffect, useCallback } from 'react';
import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'



function PrisonIndustry ({data, names}) {

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
    const prison1 = get_weight(data, "Prison Free Funds: Prison industry, weight"); 
    const prison2= get_weight(data, "Prison Free Funds: Private prison operators, weight");
    const prison3 = get_weight(data, "Prison Free Funds: Border industry, weight");

    
    const prisonComparison = {
        labels: names,
        datasets: [{
        label: "Prison Industry",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Private Prison Operators",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Border Industry",
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
                <h3 className= "Heading">Prison</h3>
                <h5 className= "Sub-heading">Funds are screened for investments in companies with involvement in the prison industrial complex.</h5>
                <div className="barChart">
                    <Bar data= {prisonComparison} plugins={[ChartDataLabels]} options={options} />
                </div>  
            </div> 
        </div>


    );


}
export default PrisonIndustry