import React, { useState, useEffect, useCallback } from 'react';
import { Bar, Doughnut, Pie } from 'react-chartjs-2'
import { gender_scoremultiple } from '../utils/genderScoreMultiple.js'
import { get_weight } from '../utils/getWeight.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GenderEquality ({data, names}) {

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
          }
        }
      };

      const optionsScores = {
        layout: {
          padding: {
              top: 40,
          }
        },
        plugins:{
          legend: {
            position: 'bottom'
          },
          datalabels: {
            display: true,
            color: 'black',
            align: "top",
            anchor: "end",
            offset: -1,
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
      label: "Policies promoting gender equality (out of 20 points)",
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
        <Layout> 

        <Container className='mb-5'>
          <Row className='mt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Gender Equality</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
            <h6 className= "text-start">These insights are provided by Equileap; a leading provider of gender equality data and insights.</h6>
            <h6 className="text-start">This data was collected between 1tst August 2022 and 31st August 2022 </h6>

            </Row>
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Holdings with Equileap gender equality scores</h4>
                  <p>Below represents the percent of fund assets where Equileap gender equality company scores are available for each of the funds you invest in.</p>
              </Col>
          </Row>
        </Container>


        <Container className='mb-5'>
          <Bar data= {genderComparison} plugins={[ChartDataLabels]} options={options}/>
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Gender balance in leadership and workforce</h4>
                  <p>The gender equality score for gender balance in leadership and workforce is calculated by averaging the Equileap company scores of the portfolio holdings, weighted by market value</p>
              </Col>
          </Row>
        </Container>

        <Container className='mb-5'> 
          <Bar data={genderLeadership} plugins={[ChartDataLabels]} options={optionsScores} />
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Equal compensation and work life balance</h4>
                  <p>The gender equality score for equal compensation and work life balance is calculated by averaging the Equileap company scores of the portfolio holdings, weighted by market value</p>
              </Col>
          </Row>
        </Container>

        <Container className='mb-5'> 
          <Bar data={genderCompensation} plugins={[ChartDataLabels]} options={optionsScores} />
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Policies promoting gender equality</h4>
                  <p>The gender equality score for policies promoting gender equality is calculated by averaging the Equileap company scores of the portfolio holdings, weighted by market value.</p>
              </Col>
          </Row>
        </Container>

        <Container className='mb-5'> 
          <Bar data={genderPolicy} plugins={[ChartDataLabels]} options={optionsScores} />
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Commitment, transparency, and accountability</h4>
                  <p>The gender equality score for commitment, transparency, and accountability is calculated by averaging the Equileap company scores of the portfolio holdings, weighted by market value.</p>
              </Col>
          </Row>
        </Container>

        <Container className='mb-5'> 
          <Bar data={genderTransparency} plugins={[ChartDataLabels]} options={optionsScores}/>
        </Container>



             
          </Layout>


    );


}
export default GenderEquality