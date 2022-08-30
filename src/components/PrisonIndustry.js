import React, { useState, useEffect, useCallback } from 'react';
import { comparePrison } from '../utils/comparePrison.js'
import { compareBorder } from '../utils/compareBorder.js'
import { comparePrivatePrisons } from '../utils/comparePrivatePrisons.js'
import { Bar } from 'react-chartjs-2'

function PrisonIndustry ({data}) {

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
                    <Bar data= {prisonAll}/>
                </div> 
            </div>  


            <div className= "containerLarge">
                <h3 className= "Heading">Border</h3>
                <h5 className= "Sub-heading">Funds are screened for investments in companies with involvement in the prison industrial complex.</h5>
                <div className="barChart">
                    <Bar data= {prisonBorder}/>
                </div> 
            </div> 

            <div className= "containerLarge">    
                <h3 className= "Heading">Private Prison Operators</h3>
                <h5 className= "Sub-heading">Funds are screened for investments in companies with involvement in the prison industrial complex.</h5>
                <div className="barChart">
                    <Bar data= {privatePrisons}/>
                </div>  
            </div> 
            
          
        </div>


    );


}
export default PrisonIndustry