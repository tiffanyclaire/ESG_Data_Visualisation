import React, { useState, useEffect, useCallback } from 'react';
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

function GenderEquality ({data}) {

    const options = {
        plugins:{
          datalabels: {
            display: true,
            color: 'black',
            align: "top",
            anchor: "end",
            offset: 10,
          }
        }
      };

    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Overall Gender Equality Scores</h3> 
                <div className="barChart">
                    <Bar data= {''} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>
        </div>


    );


}
export default GenderEquality