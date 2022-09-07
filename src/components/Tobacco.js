import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { get_weight } from '../utils/getWeight.js'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tobacco ({data, names}) {


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
    const prison1 = get_weight(data, "Tobacco Free Funds: Tobacco producer, weight"); 
    const prison2= get_weight(data, "Tobacco Free Funds: Tobacco-promoting entertainment company, weight");

    
    const tobaccoComparison = {
        labels: names,
        datasets: [{
        label: "Producer",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Promotion",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      }
        ]
      }



    return (

      <Layout>

        <Container className='mb-5'>
          <Row className='mt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Tobacco</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
            <h6 className= "text-start">This pension fund is invested in at least 1200 companies</h6>
            <h6 className="text-start">This data was collected between 1tst August 2022 and 31st August 2022 </h6>

            </Row>
        </Container>

                    <Bar data= {tobaccoComparison} plugins={[ChartDataLabels]} options={options}/>

      </Layout>
        


    );


}
export default Tobacco