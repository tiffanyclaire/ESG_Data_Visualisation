import React, { useState, useEffect} from 'react';
import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Guns ({data, names}) {

    const options = {
      indexAxis: 'y',
      layout: {
          padding: {
              top: 40,
              right: 40,
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
            align: "right",
            anchor: "end",
            formatter: function(value, context) {
                return  Math.round(value) + '%'
            }
          }
        }
      };


      // getting three datasets
    const prison1 = get_weight(data, "Gun Free Funds: Civilian firearm, weight"); 
    const prison2= get_weight(data, "Gun Free Funds: Gun manufacturer, weight");
    const prison3 = get_weight(data, "Gun Free Funds: Gun retailer, weight");

    
    const gunsComparison = {
        labels: names,
        datasets: [{
        label: "Civilian",
        data: prison1,
        backgroundColor: [
            'rgba(246, 23, 107, 0.8)'
        ]
        
      },
      {
        label: "Manufacturer",
        data: prison2,
        backgroundColor: [
            'rgba(0, 41, 234, 0.8)'
        ]
        
      },
      {
        label: "Retailer",
        data: prison3,
        backgroundColor: [
            'rgba(255, 102, 0, 0.8)'
        ]
        
      }
        ]
      }



    return (
      <Layout>

        <Container className='mb-5'>
          <Row className='mt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Guns</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
          <Col md={8} className='text-start' > 
            <h6>Discover how much of your investments are invested in companies which manufacture and sell firearms within the civilian market.</h6>
            <h6>This data was collected between 1st August 2022 and 31st August 2022 </h6>
            </Col>

            </Row>
        </Container>

        <Container className='mb-5'>
          <Bar data= {gunsComparison} plugins={[ChartDataLabels]} options={options}/>
        </Container>

                    

          <Container className='mb-5'>
          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Civilian Firearms</h4>
                  <p>Data on companies which manufacture firearms for the civilian market (non-military use) is from Morningstar. Support for increased background checks has increased, however it is still possible to be unknowlingly investing in the firearms industry. </p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Gun Manufacturers</h4>
                  <p >The gun manufacturers screen is comprised of publicly traded companies identified as manufacturers of firearms or ammunition.</p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Gun Retailers</h4>
                  <p >The gun retailers screen is comprised of publicly traded companies identified as retailers of firearms or ammunition for the civilian market. Billions are made through sales in handguns, shotguns, rifles, ammunition and semiautomatic weapons.</p>
              </Col>
          </Row>
        </Container>

      </Layout>
          



        


    );


}
export default Guns