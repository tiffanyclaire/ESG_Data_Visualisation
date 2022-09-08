import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import Layout from './Layout.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Weapons ({data, names}) {

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
            'rgba(0, 127, 0, 0.8)'
        ]
        
      },
      {
        label: "Contractor",
        data: prison2,
        backgroundColor: [
            'rgba(0, 41, 234, 0.8)'
        ]
        
      },
      {
        label: "Nuclear",
        data: prison3,
        backgroundColor: [
            'rgba(0, 131, 249, 0.8)'
        ]
        
      },
      {
        label: "Cluster",
        data: prison4,
        backgroundColor: [
            'rgba(237, 0, 0, 0.8)'
        ]
        
      }
        ]
      }






    return (
        
      <Layout>

        <Container className='mb-5 '>
          <Row className='mt-5'>
            <Col  lg={8} className='text-start'>
              <h2 className="fw-bold">Weapons</h2> 
            </Col>
          </Row>

          <Row className='mt-2'>
            <Col  lg={8} className='text-start'>
            <h6 >Discover how much of your investments are invested in the weapon and firearms industry. </h6>
            <h6 >This data was collected between 1tst August 2022 and 31st August 2022 </h6>
            </Col>

            </Row>
        </Container>

        <Container className='mb-5'>
                    <Bar data= {weaponsComparison} plugins={[ChartDataLabels]} options={options}/>
        </Container>

        <Container className='mb-5'>
          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Military Weapons</h4>
                  <p>The Military Weapons screen list identifies companies flagged for arms-producing in the OECD and developing countries (except China) based on open sources. Such information is derived from The Stockholm International Peace Research Institute (SIPRI) Arms Industry Database.</p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Military Contractors</h4>
                  <p>The Stockholm International Peace Research Institute (SIPRI) Arms Industry Database contains information on arms-producing and military services, and financial data for  The public companies from this top 100 list (last updated with 2017 data) were used to screen for major military contractors. </p>
              </Col>
          </Row>

          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Nuclear Weapons</h4>
                  <p>PAX, a non-profit organisation, provides information on companies identified as nuclear weapon manufacturers or servicers based on their 'Don't Bank on the Bomb 2019' data.</p>
              </Col>
          </Row>
          <Row className='mb-3 , justify-content-md-center'>
              <Col md={8} className='text-start' >
                  <h4 className='mb-3'>Cluster munitions / landmines</h4>
                  <p>Cluster munition manufacturers are identified via research also carried out by PAX. Publicly-traded companies on PAX's Worldwide investments in Cluster Munitions a shared responsibility (2018) list are added to the cluster/ munitions screen list.</p>
              </Col>
          </Row>
        </Container>
        
      </Layout>
       


    );


}
export default Weapons