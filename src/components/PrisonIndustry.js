import React, { useState, useEffect, useCallback } from 'react';
import { comparePrison } from '../utils/comparePrison.js'
import { Bar } from 'react-chartjs-2'

function PrisonIndustry ({data}) {

    const [prisonAll, setprisonAll] = useState({
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
            label: "Percent of fund assets found on major weapon screen lists ",
            data: prison.data,
          }]
      
          })


    }, [data])

    return (
        <div>
            <h3 className= "Heading">Prison Industrial Complex</h3>  
            <Bar data= {prisonAll}/>
        </div>


    );


}
export default PrisonIndustry