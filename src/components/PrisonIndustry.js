import React, { useState, useEffect, useCallback } from 'react';
import { comparePrison } from '../utils/comparePrison.js'
import { compareBorder } from '../utils/compareBorder.js'
import { comparePrivatePrisons } from '../utils/comparePrivatePrisons.js'
import { chart } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'



function PrisonIndustry ({data}) {

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

    const [prisonAll, setprisonAll] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });

    const [prisonBorder, setprisonBorder] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });

    const [privatePrisons, setprivatePrisons] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });


    useEffect(() =>{
        const prison = comparePrison(data);
        setprisonAll( {
            labels: prison.labels,
            datasets: [{
            label: "All flagged, weight",
            data: prison.data,
          }]
      
          })


    }, [data])

    useEffect(() =>{
        const prison = compareBorder(data);
        setprisonBorder( {
            labels: prison.labels,
            datasets: [{
            label: "Border industry, weight",
            data: prison.data,
          }]
      
          })


    }, [data])

    useEffect(() =>{
        const prison = comparePrivatePrisons(data);
        setprivatePrisons( {
            labels: prison.labels,
            datasets: [{
            label: "Private prison operators, weight",
            data: prison.data,
          }]
      
          })


    }, [data])

    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">
                <h3 className= "Heading">Prison Industrial Complex</h3>
                <h5 className= "Sub-heading">Funds are screened for investments in companies with involvement in the prison industrial complex.</h5>
                <div className="barChart">
                    <Bar data= {prisonAll} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>  


            <div className= "containerLarge">
                <h3 className= "Heading">Border</h3>
                <h5 className= "Sub-heading">Funds are screened for investments in companies with involvement in the prison industrial complex.</h5>
                <div className="barChart">
                    <Bar data= {prisonBorder} plugins={[ChartDataLabels]} options={options} />
                </div> 
            </div> 

            <div className= "containerLarge">    
                <h3 className= "Heading">Private Prison Operators</h3>
                <h5 className= "Sub-heading">Funds are screened for investments in companies with involvement in the prison industrial complex.</h5>
                <div className="barChart">
                    <Bar data= {privatePrisons} plugins={[ChartDataLabels]} options={options} />
                </div>  
            </div> 
            
          
        </div>


    );


}
export default PrisonIndustry