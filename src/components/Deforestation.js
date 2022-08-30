import React, { useState, useEffect} from 'react';
import {  compareDeforestConsumer } from '../utils/compareDeforestConsumer.js'
import {  compareDeforestProducer } from '../utils/compareDeforestProducer.js'
import {  compareDeforestFinancier } from '../utils/compareDeforestFinancier.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

function Deforestation ({data}) {

    const options = {
        plugins:{
          datalabels: {
            display: true,
            color: 'black',
            align: "top",
            anchor: "end",
            offset: 10,
            formatter: function(value, context) {
                return  Math.round(value) + '%'
            }
          }
        }
      };

    const [deforestConsumer , setdeforestConsumer] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });

    const [deforestProducer , setdeforestProducer] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });

    const [deforestFinancier , setdeforestFinancier] = useState({
        labels: [],
        datasets:[{ 
        label: "sdrfgsagras",
        data: [],

    }]
    });




    useEffect(() =>{
        const deforest = compareDeforestConsumer(data);
        setdeforestConsumer( {
            labels: deforest.labels,
            datasets: [{
            label: "Deforestation-risk producer, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])


    useEffect(() =>{
        const deforest = compareDeforestProducer(data);
        setdeforestProducer( {
            labels: deforest.labels,
            datasets: [{
            label: "Deforestation-risk producer, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])


    useEffect(() =>{
        const deforest = compareDeforestFinancier(data);
        setdeforestFinancier( {
            labels: deforest.labels,
            datasets: [{
            label: "Deforestation-risk financier, weight",
            data: deforest.data,
          }]
      
          })
          

    }, [data])

    console.log(deforestProducer, "PRODUCER");
   


    return (
        <div style= {{width:'90%', padding: '5%'}}>
            <div className= "containerLarge">  
                <h3 className= "Heading">Major Consumer Brand</h3> 
                <div className="barChart">
                    <Bar data= {deforestConsumer} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>

            <div className= "containerLarge">  
                <h3 className= "Heading">Producer</h3> 
                <div className="barChart">
                    <Bar data= {deforestProducer} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>

            <div className= "containerLarge">  
                <h3 className= "Heading">Financier</h3> 
                <div className="barChart">
                    <Bar data= {deforestFinancier} plugins={[ChartDataLabels]} options={options}/>
                </div> 
            </div>
        </div>


    );


}
export default Deforestation