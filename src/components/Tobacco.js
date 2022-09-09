import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { get_weight } from '../utils/getWeight.js'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tobacco ({data, names}) {


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
    const prison1 = get_weight(data, "Tobacco Free Funds: Tobacco producer, weight"); 
    const prison2= get_weight(data, "Tobacco Free Funds: Tobacco-promoting entertainment company, weight");

    
    const tobaccoComparison = {
        labels: names,
        datasets: [{
        label: "Producer",
        data: prison1,
        backgroundColor: [
            'rgba(0, 41, 234, 0.8)'
        ]
        
      },
      {
        label: "Promotion",
        data: prison2,
        backgroundColor: [
            'rgba(234, 0, 0, 0.8)'
        ]
        
      }
        ]
      }



    return (

      <Layout>

        <Container className='mb-5'>
          <Row className='pt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Tobacco</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
            <Col  lg={8} className='text-start'>
            <p>Discover how much of your investments are invested in companies which produce tobacco or promote to children.</p>
            <h6>Click the coloured rectangles in the legend to compare the datasets individually. </h6>
            <h6 >This data was collected between 1st August 2022 and 31st August 2022 </h6>
            </Col>

            </Row>
        </Container>

        <Container className='pb-5 , shadow p-5 mb-5 bg-white rounded'> 
        <Container className='mb-5'>
          <Bar data= {tobaccoComparison} plugins={[ChartDataLabels]} options={options}/>
        </Container>

                    

                    <Container className='mb-5'>
          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Tobacco Producers</h4>
                  <p>Identified using Morningstar industry categories, these companies either produce or manufacture tobacco products. </p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Tobacco-promoting entertainment companies</h4>
                  <p>Around the world tobacoo promotion to young audiences has been banned. Tobacco depiction policies are in place in some countries, however some video production companies and studios have not eliminated smoking in PG-13 films. The tobacco-promoting entertainment companies screen is comprised of companies identified by UCSF's Smoke Free Films campaign</p>
              </Col>
          </Row>
        </Container>

        </Container>


      </Layout>
        


    );


}
export default Tobacco