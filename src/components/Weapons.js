import React, { useState, useEffect, useCallback } from 'react';
import {  compareMilitaryWeapon } from '../utils/compareMilitaryWeapon.js'
import {  compareMilitaryContractor } from '../utils/compareMilitaryContractor.js'
import {  compareNuclear } from '../utils/compareNuclear.js'
import {  compareCluster } from '../utils/compareCluster.js'
import { Bar } from 'react-chartjs-2'

function Deforestation ({data}) {

    const [militaryWeapon , setmilitaryWeapon] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });

    const [militaryContractor , setmilitaryContractor] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });
    
    const [ nuclearWeapon , setnuclearWeapon] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });

    const [ clusterMunitions , setclusterMunitions] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });




    useEffect(() =>{
        const deforest = compareMilitaryWeapon(data);
        setmilitaryWeapon( {
            labels: deforest.labels,
            datasets: [{
            label: "Military weapon, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

    useEffect(() =>{
        const deforest = compareMilitaryContractor(data);
        setmilitaryContractor( {
            labels: deforest.labels,
            datasets: [{
            label: "Major military contractors, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

    useEffect(() =>{
        const deforest = compareNuclear(data);
        setnuclearWeapon( {
            labels: deforest.labels,
            datasets: [{
            label: "Nuclear weapons, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])


    useEffect(() =>{
        const deforest = compareCluster(data);
        setclusterMunitions( {
            labels: deforest.labels,
            datasets: [{
            label: "Cluster munitions / landmines, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Military Weapons</h3> 
                <div className="barChart">
                    <Bar data= {militaryWeapon}/>
                </div>
            </div>


            <div className= "containerLarge">  
                <h3 className= "Heading">Major Military Contractors</h3> 
                <div className="barChart">
                    <Bar data= {militaryContractor}/>
                </div>
            </div>

            <div className= "containerLarge">  
                <h3 className= "Heading">Nuclear Weapons</h3> 
                <div className="barChart">
                    <Bar data= {nuclearWeapon}/>
                </div>
            </div>
            
            <div className= "containerLarge">  
                <h3 className= "Heading">Cluster Munitions</h3> 
                <div className="barChart">
                    <Bar data= {clusterMunitions}/>
                </div>
            </div>
        </div>


    );


}
export default Deforestation