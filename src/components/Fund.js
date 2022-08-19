import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {get_fund} from '../utils/getFund.js'
import {getFirearms} from '../utils/getFirearms.js'
import { Bar } from 'react-chartjs-2'



function Fund ({data}) {
    const { id } = useParams();
    //Individual Fund
    const [indvFund, setindvFund] = useState([]);
    const [fundFirearms, setfundFirearms] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });

    useEffect(() => {

    //Get fund data by name and store data
    const new_fund = get_fund(id, data)
    setindvFund(new_fund);
    console.log(data);
    console.log(indvFund, "check indvfund");
    console.log(parseFloat(indvFund["Gun Free Funds: Civilian firearm, weight"]), "CHECKING");

    },[data, id, indvFund]); 

    useEffect(() =>{
        const firearmsData = getFirearms(indvFund);

        setfundFirearms( {
            labels: ["Civilian firearm, weight", "Gun manufacturer, weight", "Gun retailer, weight"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: firearmsData,
          }]
      
          })

          

    },[indvFund]);

    console.log(fundFirearms, " FIREARMS");

    
   
    return (
        <div style= {{width:'90%', padding: '5%'}}>

        <h2 className= "Heading"> {indvFund["Fund profile: Shareclass name"]}</h2>
        <h3 className= "Sub-heading">Fund ID: { id } </h3>
        <h3 className= "Sub-heading">Shareclass Type: { indvFund["Fund profile: Shareclass type"]} </h3>
        <h5 className= "Sub-heading">This pension fund is invested in at least 1200 companies</h5>
        <h5 className= "Sub-heading">This data was collected between 1tst August 2022 and 31st August 2022 </h5>

        {/* <h2>{indvFund['id']}</h2> */}
        <div>

        </div>
            <h3 className= "Heading">Gender Equality</h3>
        <div>
            <h3 className= "Heading">Deforestation</h3>
        </div>

        <div>
            <h3 className= "Heading">Fossil Fuels</h3>   
        </div>

        <div>
            <h3 className= "Heading">Prison Industrial Complex</h3>  
        </div>

        <div>
            <h3 className= "Heading">Military Weapons</h3> 
        </div>

        <div>
            <h3 className= "Heading">Guns</h3>
            <Bar data={fundFirearms} />
        </div>

        <div>
            <h3 className= "Heading">Guns</h3>
        </div>

        <div>
            <h3 className= "Heading">Tobacco</h3>
        </div>


    

        
        

        </div>
        
    );
}


  

export default Fund;