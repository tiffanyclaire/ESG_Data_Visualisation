import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Weapons ({data, names}) {

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
    const prison1 = get_weight(data, "Weapon Free Funds: Military weapon, weight"); 
    const prison2= get_weight(data, "Weapon Free Funds: Major military contractors, weight");
    const prison3 = get_weight(data, "Weapon Free Funds: Nuclear weapons, weight");
    const prison4 = get_weight(data, "Weapon Free Funds: Cluster munitions / landmines, weight");

    
    const weaponsComparison = {
        labels: names,
        datasets: [{
        label: "Military",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Contractor",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Nuclear",
        data: prison3,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Cluster",
        data: prison4,
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
              <h2 className="fw-bold">Weapons</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
            <h6 className= "text-start">This pension fund is invested in at least 1200 companies</h6>
            <h6 className="text-start">This data was collected between 1tst August 2022 and 31st August 2022 </h6>

            </Row>
        </Container>
                    <Bar data= {weaponsComparison} plugins={[ChartDataLabels]} options={options}/>
          
      </Layout>
       


    );


}
export default Weapons