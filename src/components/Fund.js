import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  {get_fund } from '../utils/getFund.js'
import { get_deforest } from '../utils/getDeforest.js'
import { get_fossil } from '../utils/getFossil.js'
import { getFirearms } from '../utils/getFirearms.js'
import { get_guns } from '../utils/getGuns.js'
import { get_gender } from '../utils/getGender.js'
import { get_prison } from '../utils/getPrison.js'
import { get_tobacco } from '../utils/getTobacco.js'
import { get_weapons } from '../utils/getWeapons.js'
import { get_holdings } from '../utils/getHoldings.js'
import ReportCard from '../components/ReportCard'
import { Bar , Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'





function Fund ({data}) {
    const { id } = useParams();

    const options = {
        plugins:{
          dataLabels: {
            display: true,
            color: 'black',
            align: "end",
            anchor: "end",
          }
        }
      }

    

    
    

    //Individual Fund
    const [indvFund, setindvFund] = useState([]);

    const holdingData= get_holdings(indvFund);
    console.log(holdingData, "holding data");

    const netAssets =  (indvFund["Fund profile: Fund net assets"])
    console.log(netAssets, "NET ASSETS")
    

    const [fundFirearms, setfundFirearms] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });

    const deforest = get_deforest(indvFund)
    // Practice
    const practice = {
        labels: ["Other", "Deforestation"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: deforest,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
  
      }

    // Deforestation 
    const [forestHoldings, setforestHoldings] = useState({
        labels: [],
        datasets:[{ 
        label: "Deforestation Investments",
        data: [],

    }]
    });

    // Fossil Fuels
    const [fossilHoldings, setfossilHoldings] = useState({
        labels: [],
        datasets:[{ 
        label: "Fossil Fuel Investments",
        data: [],

    }]
    });

    // Guns
    const [gunHoldings, setgunHoldings] = useState({
        labels: [],
        datasets:[{ 
        label: "Fossil Fuel Investments",
        data: [],

    }]
    });

    // Gender
    const [genderScore, setgenderScore] = useState({
        labels: [],
        datasets:[{ 
        label: "Fossil Fuel Investments",
        data: [],

    }]
    });

    // Prison
    const [prisonHoldings, setprisonHoldings] = useState({
        labels: [],
        datasets:[{ 
        label: "Fossil Fuel Investments",
        data: [],

    }]
    });

    // Tobacco
    const [tobaccoHoldings, settobaccoHoldings] = useState({
        labels: [],
        datasets:[{ 
        label: "Fossil Fuel Investments",
        data: [],

    }]
    });

    // Weapons
    const [weaponHoldings, setweaponHoldings] = useState({
        labels: [],
        datasets:[{ 
        label: "Fossil Fuel Investments",
        data: [],

    }]
    });

    // All Holdings
    const allHoldings = {
        labels: [],
        datasets: [{
            label: "label",
            data: [],
        }]
    }


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


    // Graphs for Holdings //

    useEffect(() =>{
        const deforest = get_deforest(indvFund)
        setforestHoldings( {
            labels: ["Other", "Deforestation"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: deforest,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(255, 118, 0, 0.6)'
            ]
            
          }]
      
          })

        const fossil = get_fossil(indvFund)
        setfossilHoldings( {
            labels: ["Other", "Fossil Fuels"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: fossil,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(0, 103, 0, 0.6)'
            ]
          }]
      
          })

          const guns = get_guns(indvFund)
          setgunHoldings( {
            labels: ["Other", "Civilian Firearms"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: guns,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(0, 44, 255, 0.7)'
            ]
          }]
      
          })

          const gender = get_gender(indvFund)
          setgenderScore( {
            labels: ["", "Overall Score (Out of 100)"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: gender,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(0, 123, 253, 0.6)'
            ]
          }]
      
          })

          const prison = get_prison(indvFund)
          setprisonHoldings( {
            labels: ["Other", "Prison Industry Holdings"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: prison,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(90, 21, 255, 0.6)'
            ]
          }]
      
          })

          const tobacco = get_tobacco(indvFund)
          settobaccoHoldings( {
            labels: ["Other", "Tobacco Producer"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: tobacco,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(255, 0, 0, 0.7)'
            ]
          }]
      
          })

          const weapons = get_weapons(indvFund)
          setweaponHoldings( {
            labels: ["Other", "Military Weapons"],
            datasets: [{
            label: "Percent of fund assets found on major weapon screen lists ",
            data: weapons,
            backgroundColor: [
                'rgba(0, 0, 0, 0.1)',
                'rgba(239, 0, 117, 0.6)'
            ]
          }]
      
          })



    } , [indvFund]);

    console.log(forestHoldings, "deforest");
    console.log(fossilHoldings, "fossil");
    console.log(prisonHoldings, "prison");


    


    

    
   
    return (
        <div style= {{width:'90%', padding: '5%'}}>

        {/* <h2 className= "Heading"> {indvFund["Fund profile: Shareclass name"]}</h2> */}
        <h2 className= "Heading">Shareclass Type: { indvFund["Fund profile: Shareclass name"]} </h2>
        <h3 className= "Sub-heading">Fund ID: { id } </h3>
        <h3 className= "Sub-heading">Shareclass Type: { indvFund["Fund profile: Shareclass type"]} </h3>
        <h5 className= "Sub-heading">This pension fund is invested in at least 1200 companies</h5>
        <h5 className= "Sub-heading">This data was collected between 1tst August 2022 and 31st August 2022 </h5>

        <ReportCard data={indvFund}/>

        {/* <h2>{indvFund['id']}</h2> */}
        <div>

        </div>
        <div className= "chartContainer">
            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Gender Equality</h3>
                <Doughnut data={genderScore} />
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Deforestation</h3>
                <Doughnut data={forestHoldings} plugins={[ ChartDataLabels ]}/>
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Fossil Fuels</h3> 
                <Doughnut data={fossilHoldings} />  
            </div>
        </div>
        
        <div className= "chartContainer">
            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Prison Industrial Complex</h3>
                <Doughnut data={prisonHoldings} />  
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Military Weapons</h3> 
                <Doughnut data={weaponHoldings} /> 
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Guns</h3>
                <Doughnut data={gunHoldings} />
            </div>

            {/* <div style= {{width:'90%'}}>
                <h3 className= "Heading">Guns</h3>
                <Bar data={fundFirearms} />
            </div> */}
        </div>

        <div className= "chartContainer">

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Tobacco</h3>
                <Doughnut data={tobaccoHoldings} />
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">PRACTICE</h3>
                <Doughnut data={practice} />
            </div>
        </div>


    

        
        

        </div>
        
    );
}


  

export default Fund;