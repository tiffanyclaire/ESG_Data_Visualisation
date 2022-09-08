import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Deforestation ({data, names}) {

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
    const prison1 = get_weight(data, "Deforestation Free Funds: Deforestation-risk consumer brand, weight"); 
    const prison2= get_weight(data, "Deforestation Free Funds: Deforestation-risk producer, weight");
    const prison3 = get_weight(data, "Deforestation Free Funds: Deforestation-risk financier, weight");

    
    const deforestationComparison = {
        labels: names,
        datasets: [{
        label: "Consumer",
        data: prison1,
        backgroundColor: [
          'rgba(255, 102, 0, 0.8)'
        ]
        
      },
      {
        label: "Producer",
        data: prison2,
        backgroundColor: [
            'rgba(0, 127, 0, 0.8)'
        ]
        
      },
      {
        label: "Financier",
        data: prison3,
        backgroundColor: [
            'rgba(0, 41, 234, 0.8)'
        ]
        
      }
        ]
      }


    return (

      <Layout>
        <Container className='mb-5'>
          <Row className='mt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Deforestation</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
          <Col  lg={8} className='text-start'>
            <h6 className= "text-start">Discover how much of your investments are invested in companies which fund deforestation-risk producers, sell resources from unsustainable producers, or contribute to deforestation directly.</h6>
            <h6 className="text-start">This data was collected between 1tst August 2022 and 31st August 2022 </h6>
            </Col>

            </Row>
        </Container>

        <Container className='mb-5'>
          <Bar data= {deforestationComparison} plugins={[ChartDataLabels]} options={options}/>
        </Container>
 


        <Container className='mb-5'>
          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Major consumer brands</h4>
                  <p>Consumer goods retailers that source palm oil, paper/pulp, rubber, timber, cattle, and soy from deforestation-risk producers and traders and sell it to consumers worldwide.</p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Agricultural commodity producers and traders</h4>
                  <p>Companies that produce and trade palm oil, paper/pulp, rubber, timber, cattle, and soy, and have a past record or a significant risk of contributing to deforestation, land grabbing, and human rights abuses.</p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Financiers: Banks and lenders</h4>
                  <p >Financial institutions directly and indirectly involved in underwriting and lending to deforestation-risk producers and traders. These are the publicly listed banks drawn from the platform Forests and Finance.</p>
              </Col>
          </Row>
        </Container>
                 
            
        </Layout>


    );


}
export default Deforestation