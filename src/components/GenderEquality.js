import React, { useState, useEffect, useCallback } from 'react';
import {  compareGender } from '../utils/compareGender.js'
import { Bar } from 'react-chartjs-2'

function GenderEquality ({data}) {

    const [genderEquality , setgenderEquality] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });




    useEffect(() =>{
        const gender = compareGender(data);
        setgenderEquality( {
            labels: gender.labels,
            datasets: [{
            label: "Gender equality score - Overall score (out of 100 points)",
            data: gender.data,
          }]
      
          })
          

    }, [data])

    console.log(genderEquality, " GENDER CHECK ")
   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Overall Gender Equality Scores</h3> 
                <div className="barChart">
                    <Bar data= {genderEquality}/>
                </div> 
            </div>
        </div>


    );


}
export default GenderEquality