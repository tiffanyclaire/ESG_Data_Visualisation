import React, { useState, useEffect, useCallback } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { gender_scoremultiple } from '../utils/genderScoreMultiple.js'
import { get_weight } from '../utils/getWeight.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

function GenderEquality ({data, names}) {

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

    const leadership = gender_scoremultiple(data, "Gender Equality Funds: Gender equality score - Gender balance in leadership and workforce (out of 40 points)");
    const compensation = gender_scoremultiple(data, "Gender Equality Funds: Gender equality score - Equal compensation and work life balance (out of 30 points)");
    const policies = gender_scoremultiple(data, "Gender Equality Funds: Gender equality score - Policies promoting gender equality (out of 20 points)");
    const transparency = gender_scoremultiple(data, "Gender Equality Funds: Gender equality score - Commitment, transparency, and accountability (out of 10 points)");
    const weight = get_weight(data, "Gender Equality Funds: Weight of holdings with Equileap gender equality scores");

    const genderComparison = {
      labels: names,
      datasets: [{
      label: "Weight of holdings with Equileap gender equality scores",
      data: weight,
      backgroundColor: [
          'rgba(0, 0, 0, 0.1)',
          'rgba(255, 118, 0, 0.6)'
      ]
      
    }]
    };

    const genderLeadership = {
      labels: names,
      datasets: [{
      label: "Gender balance in leadership and workforce (out of 40 points)",
      data: leadership,
      backgroundColor: [
          'rgba(0, 0, 0, 0.1)',
          'rgba(255, 118, 0, 0.6)'
      ]
      
    }]
    };

    const genderCompensation= {
      labels: names,
      datasets: [{
      label: "Equal compensation and work life balance (out of 30 points)",
      data: compensation,
      backgroundColor: [
          'rgba(0, 0, 0, 0.1)',
          'rgba(255, 118, 0, 0.6)'
      ]
      
    }]
    };

    const genderPolicy= {
      labels: names,
      datasets: [{
      label: "Gender Equality Funds: Gender equality score - Policies promoting gender equality (out of 20 points)",
      data: policies,
      backgroundColor: [
          'rgba(0, 0, 0, 0.1)',
          'rgba(255, 118, 0, 0.6)'
      ]
      
    }]
    };

    const genderTransparency= {
      labels: names,
      datasets: [{
      label: "Commitment, transparency, and accountability (out of 10 points)",
      data: transparency,
      backgroundColor: [
          'rgba(0, 0, 0, 0.1)',
          'rgba(255, 118, 0, 0.6)'
      ]
      
    }]
    };

    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Overall Gender Equality Scores</h3> 
                <div className="barChart">
                    <Bar data= {genderComparison} plugins={[ChartDataLabels]} options={options}/>
                </div> 

                <div className= "chartContainer">
                  <div style= {{width:'50%'}}>
                    <h3 className= "Heading">Gender balance in leadership and workforce</h3>
                    <Bar data={genderLeadership} plugins={[ChartDataLabels]} options={options} />
                  </div>
                </div>

                <div className= "chartContainer">
                  <div style= {{width:'50%'}}>
                    <h3 className= "Heading">Equal compensation and work life balance</h3>
                    <Bar data={genderCompensation} plugins={[ChartDataLabels]} options={options} />
                  </div>
                </div>

                <div className= "chartContainer">
                  <div style= {{width:'50%'}}>
                    <h3 className= "Heading">Policies promoting gender equality</h3>
                    <Bar data={genderPolicy} plugins={[ChartDataLabels]} options={options} />
                  </div>
                </div>

                <div className= "chartContainer">
                  <div style= {{width:'50%'}}>
                    <h3 className= "Heading">Commitment, transparency, and accountability</h3>
                    <Bar data={genderTransparency} plugins={[ChartDataLabels]} options={options}/>
                  </div>
                </div>


                
            </div>
        </div>


    );


}
export default GenderEquality