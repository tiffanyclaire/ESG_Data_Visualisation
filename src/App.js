import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Practice from './components/Practice'
import BarChart from './components/BarChart'
import BasicTable from './components/BasicTable'
import Fund from './components/Fund'
import PrisonIndustry from './components/PrisonIndustry'
import Guns from './components/Guns'
import FossilFuels from './components/FossilFuels'
import GenderEquality from './components/GenderEquality'
import Deforestation from './components/Deforestation'
import Tobacco from './components/Tobacco'
import Weapons from './components/Weapons'
import Papa from 'papaparse';
import csvData from './investValues.csv';
import 'bootstrap/dist/css/bootstrap.min.css';
import { get_allfunds } from './utils/getAllFunds.js'
import Layout from './components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  const [parsedData, setparsedData] = useState([]);


 useEffect(() => {

  const parseFile = () =>{
    Papa.parse(csvData, {
      download: true,
      header: true, 
      skipEmptyLines: true,
      complete: function(esgData){
        setparsedData(esgData.data);
        
      }
    });
  } 

  parseFile();

 }, []);   
  
 console.log("Parsed Data", parsedData); 




  const options = {
    plugins:{
      dataLabels: {
        display: true,
        color: 'black',
      }
    }
  };

 // List of fund names 
 const fund_names = get_allfunds(parsedData);
 


  // Options for Horizontal Chart
  //const options = {
   //   indexAxis: "y",
    
  //}

  //Overview Table Data

const columns= [
  {
    name: 'Asset Name',
    selector: row => row["Fund profile: Shareclass name"],
    width: "20%",
    cell: (row) =>  (
      <Link to={'/fund/'+ row["id"]}>{row["Fund profile: Shareclass name"]}</Link>
    )
  },
  {
    name: '% Invested',
    selector: row => row["Prison Free Funds: All flagged, weight"],
  },
  {
    name: 'Shareclass Type',
    selector: row => row["Fund profile: Shareclass type"],
    width: "15%",
    sortable: true,
  },
  {
    name: <Link to={'/deforestation'}>Deforestation</Link>,
    selector: row => row["Deforestation Free Funds: Deforestation grade"],
    conditionalCellstyles: [{
      when: row=> (row["Deforestation Free Funds: Deforestation grade"]) === "B",
      style:{
        backgroundColor: 'rgb(127, 255, 212)',

      }
    }],
  },
  {
    name: <Link to={'/fossilfuels'}>Fossil Fuels</Link>,
    selector:row => row["Fossil Free Funds: Fossil fuel grade"],
  },
  {
    name: <Link to={'/prison'}>Prison</Link>,
    selector: row => row["Prison Free Funds: Prison industrial complex grade"],
  },
  {
    name: <Link to={'/gender'}>Gender</Link>,
    selector: row => row["Gender Equality Funds: Gender equality grade"],
  },
  {
    name: <Link to={'/weapons'}>Weapons</Link>,
    selector: row => row["Weapon Free Funds: Military weapon grade"],
  },
  {
    name: <Link to={'/guns'}>Guns</Link>,
    selector: row => row["Gun Free Funds: Civilian firearm grade"],
  },
  {
    name: <Link to={'/tobacco'}>Tobacco</Link>,
    selector: row => row["Tobacco Free Funds: Tobacco grade"],
  },
   
];



  return (

    <Router>
    
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={
              <Layout>

            <Container className='mb-5'>
              <Row className='mt-5'>
                <Col  lg={8} className='text-start'>
                  <h2 className="fw-bold">Overview of where my money is invested</h2> 
                </Col>
              </Row>

              <Row className='mt-2'>
                <h6 className= "text-start">Your account is broken into different financial assests. You have 6 funds.</h6>
                <h6 className="text-start">This data was collected between 1tst August 2022 and 31st August 2022 </h6>
              </Row>
            </Container>
  
                  <BasicTable columns={columns} data={parsedData} />
              </Layout>
                
            } />


            <Route path="/fund/:id" element={
              <div>
                  <Fund data={parsedData}/> 
              </div>
            } />

            <Route path="/prison" element={

                  <div>
                    <PrisonIndustry data= {parsedData} names= {fund_names}/>
                  </div>

            } />

            <Route path="/gender" element={

                  <div>
                    <GenderEquality data={parsedData} names= {fund_names}/> 
                  </div>

            } />

            <Route path="/guns" element={

                <div>
                  <Guns data= {parsedData} names= {fund_names}/> 
                </div>


            } />

            <Route path="/fossilfuels" element={

                <div>
                  <FossilFuels data= {parsedData} names= {fund_names}/> 
                </div>

            } />

            <Route path="/deforestation" element={

                <div>
                  <Deforestation data= {parsedData} names= {fund_names}/> 
                </div>

            } />

            <Route path="/tobacco" element={

                  <div>
                    <Tobacco data= {parsedData} names={fund_names}/> 
                  </div>


            } />

            <Route path="/weapons" element={
                  <div>
                    <Weapons data= {parsedData} names= {fund_names}/> 
                  </div>


            } />

          </Routes>
        </div>
      </div>

    </Router>

  );
}

export default App;
