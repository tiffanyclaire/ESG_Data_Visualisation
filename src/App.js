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
import Container from 'react-bootstrap/Container';
//Chart.register(ChartDataLabels);



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
    width: "18%",
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
              <Container>
                <h2 className= "Heading" >Overview of where my money is invested</h2>
                <h5 className= "Sub-heading">Your account is broken into different financial assests. You have 6 funds.</h5>

                <div style= {{width:'90%'}}> 
                  <BasicTable columns={columns} data={parsedData} />
                </div>
                </Container>
            } />


            <Route path="/fund/:id" element={
              <div>
                  <Fund data={parsedData}/> 
              </div>
            } />

            <Route path="/prison" element={
              <div>
                <h2>Prison Industry</h2>
                  <div>
                    <PrisonIndustry data= {parsedData} names= {fund_names}/>
                  </div>
                </div>
            } />

            <Route path="/gender" element={
              <div>
                <h2>Gender Equality</h2>
                  <div>
                    <GenderEquality data={parsedData} names= {fund_names}/> 
                  </div>
              </div>

            } />

            <Route path="/guns" element={
              <div>
                <h2>Guns</h2>

                <div>
                  <Guns data= {parsedData} names= {fund_names}/> 
                </div>

              </div>

            } />

            <Route path="/fossilfuels" element={
              <div>
                <h2>Fossil Fuels</h2>

                <div>
                  <FossilFuels data= {parsedData} names= {fund_names}/> 
                </div>

              </div>

            } />

            <Route path="/deforestation" element={
              <div>
                <h2>Deforestation</h2>

                <div>
                  <Deforestation data= {parsedData} names= {fund_names}/> 
                </div>

              </div>

            } />

            <Route path="/tobacco" element={
              <div>
                <h2>Tobacco</h2>
                  <div>
                    <Tobacco data= {parsedData} names={fund_names}/> 
                  </div>
              </div>

            } />

            <Route path="/weapons" element={
              <div>
                <h2>Weapons</h2>
                  <div>
                    <Weapons data= {parsedData} names= {fund_names}/> 
                  </div>
              </div>

            } />

          </Routes>
        </div>
      </div>

    </Router>

  );
}

export default App;
