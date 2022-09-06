import React, { useState, useEffect} from 'react';
import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';

function Deforestation ({data, names}) {

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
    const prison1 = get_weight(data, "Deforestation Free Funds: Deforestation-risk consumer brand, weight"); 
    const prison2= get_weight(data, "Deforestation Free Funds: Deforestation-risk producer, weight");
    const prison3 = get_weight(data, "Deforestation Free Funds: Deforestation-risk financier, weight");

    
    const deforestationComparison = {
        labels: names,
        datasets: [{
        label: "Consumer",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Producer",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Financier",
        data: prison3,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      }
        ]
      }


    return (

      <Layout>
 
                    <h3 className= "Heading">Deforestation</h3> 
                    <div className="barChart">
                        <Bar data= {deforestationComparison} plugins={[ChartDataLabels]} options={options}/>
                    </div> 
            
        </Layout>


    );


}
export default Deforestation