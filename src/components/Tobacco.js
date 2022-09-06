import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { get_weight } from '../utils/getWeight.js'
import Layout from './Layout.js';

function Tobacco ({data, names}) {


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
    const prison1 = get_weight(data, "Tobacco Free Funds: Tobacco producer, weight"); 
    const prison2= get_weight(data, "Tobacco Free Funds: Tobacco-promoting entertainment company, weight");

    
    const tobaccoComparison = {
        labels: names,
        datasets: [{
        label: "Producer",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Promotion",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      }
        ]
      }



    return (

      <Layout>
          
                <h3 className= "Heading">Tobacco</h3> 
                <div className="barChart">
                    <Bar data= {tobaccoComparison} plugins={[ChartDataLabels]} options={options}/>
                </div>

      </Layout>
        


    );


}
export default Tobacco