import React, { useState, useEffect} from 'react';
import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';

function Guns ({data, names}) {

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
    const prison1 = get_weight(data, "Gun Free Funds: Civilian firearm, weight"); 
    const prison2= get_weight(data, "Gun Free Funds: Gun manufacturer, weight");
    const prison3 = get_weight(data, "Gun Free Funds: Gun retailer, weight");

    
    const gunsComparison = {
        labels: names,
        datasets: [{
        label: "Civilian",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Manufacturer",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Retailer",
        data: prison3,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      }
        ]
      }



    return (
      <Layout>

                <h3 className= "Heading">Guns</h3> 
                <div className="barChart">
                    <Bar data= {gunsComparison} plugins={[ChartDataLabels]} options={options}/>
                </div> 

      </Layout>
          



        


    );


}
export default Guns