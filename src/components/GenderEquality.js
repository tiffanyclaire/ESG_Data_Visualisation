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
            label: "dhjhdthyht ",
            data: gender.data,
          }]
      
          })
          

    }, [data])

    console.log(genderEquality, " GENDER CHECK ")
   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <h3 className= "Heading">Gender Equality</h3>  
            <Bar data= {genderEquality}/>
        </div>


    );


}
export default GenderEquality