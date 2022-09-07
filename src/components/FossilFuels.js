import React, { useState, useEffect, useCallback } from 'react';
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { get_weight } from '../utils/getWeight.js'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FossilFuels ({data, names}) {

    const options = {
        layout: {
          padding: {
              top: 40,
          }
        },
        plugins:{
          legend: {
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
                label: function(item, everything) {
                    const value = item.formattedValue
                    return value + '%'
                }
            }
          },
          datalabels: {
            display: true,
            color: 'black',
            align: "top",
            anchor: "end",
            offset: -1,
            formatter: function(value, context) {
                return  Math.round(value) + '%'
            }
          }
        }
      };

      // getting three datasets
    const prison1 = get_weight(data, "Fossil Free Funds: Coal industry, weight"); 
    const prison2= get_weight(data, "Fossil Free Funds: Oil / gas industry, weight");
    const prison3 = get_weight(data, "Fossil Free Funds: Fossil-fired utilities, weight");

    
    const fossilComparison = {
        labels: names,
        datasets: [{
        label: "Coal",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Oil/Gas",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Utilities",
        data: prison3,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      }
        ]
      }



    return (

      <Layout>

        <Container className='mb-5'>
          <Row className='mt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Fossil Fuels</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
            <h6 className= "text-start">This pension fund is invested in at least 1200 companies</h6>
            <h6 className="text-start">This data was collected between 1tst August 2022 and 31st August 2022 </h6>

          </Row>
        </Container>

        <Container className='mb-5'>
                    <Bar data= {fossilComparison} plugins={[ChartDataLabels]} options={options}/>
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Coal</h4>
                  <p >The coal industry screen consists of companies designated by Morningstar industry classifications as Thermal Coal or Coking Coal; companies from the Global Coal Exit List marked as Mining or Services for Coal Industry Sector.</p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Oil and Gas</h4>
                  <p >The oil/gas screen consists of companies designated by Morningstar industry classifications as Oil and Gas Drilling, Oil and Gas Extraction and Production, Oil and Gas Equipment and Services, Oil and Gas Integrated, Oil and Gas Midstream, and Oil and Gas Refining and Marketing; upstream and midstream companies from the Global Oil/Gas Exit List.</p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Utilities</h4>
                  <p >The fossil-fired utilities screen consists of companies designated by Morningstar industry classifications as Utilities-Independent Power Producers, Utilities-Renewable, Utilities-Diversified, Utilities-Regulated Electric, and Utilities-Regulated Gas. Despite the name, the Utilities-Renewable industry classification includes companies that distribute gas and/or burn fossil fuel for power generation. It also includes companies from the Global Coal Exit List marked as Power for Coal Industry Sector. We remove any companies in these categories that are engaged in 100% renewable operations, pure transmission, or otherwise don't distribute gas or burn fossil fuels to generate power.</p>
              </Col>
          </Row>
        </Container>
              
      </Layout>

    );


}
export default FossilFuels