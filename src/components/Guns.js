import React, { useState, useEffect} from 'react';
import {  compareCivilian } from '../utils/compareCivilian.js'
import {  compareManufacturer } from '../utils/compareManufacturer.js'
import {  compareRetailer } from '../utils/compareRetailer.js'
import { Bar } from 'react-chartjs-2'

function Guns ({data}) {

    const [civilianFirearms, setcivilianFirearms] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });

    const [gunManufacturer, setgunManufacturer] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });

    const [gunRetailer, setgunRetailer] = useState({
        labels: [],
        datasets:[{ 
        label: "Prison Free Funds: All flagged, weight",
        data: [],

    }]
    });




    useEffect(() =>{
        const firearms = compareCivilian(data);
        setcivilianFirearms( {
            labels: firearms.labels,
            datasets: [{
            label: "Civilian firearm, weight",
            data: firearms.data,
          }]
      
          })
       

    }, [data])
    console.log(civilianFirearms);

    useEffect(() =>{
        const firearms = compareManufacturer(data);
        setgunManufacturer( {
            labels: firearms.labels,
            datasets: [{
            label: "Gun manufacturer, weight",
            data: firearms.data,
          }]
      
          })
       

    }, [data])

    useEffect(() =>{
        const firearms = compareRetailer(data);
        setgunRetailer( {
            labels: firearms.labels,
            datasets: [{
            label: "Gun retailer, weight",
            data: firearms.data,
          }]
      
          })
       

    }, [data])
    


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Civilian Firearms</h3> 
                <div className="barChart">
                    <Bar data= {civilianFirearms}/>
                </div> 
            </div>

            <div className= "containerLarge">  
                <h3 className= "Heading">Gun Manufacturer</h3> 
                <div className="barChart">
                    <Bar data= {gunManufacturer}/>
                </div> 
            </div>

            <div className= "containerLarge">  
                <h3 className= "Heading">Gun Retailer</h3> 
                <div className="barChart">
                    <Bar data= {gunRetailer}/>
                </div> 
            </div>
        </div>


    );


}
export default Guns