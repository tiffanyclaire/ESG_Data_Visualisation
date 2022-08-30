import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
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
import HorizontalChart from './components/GenderEquality'
import {get_fund} from './utils/getFund'
import { csv } from 'd3';
import Papa from 'papaparse';
import csvData from './investValues.csv';




function App() {

  //All data
  const [parsedData, setParsedData] = useState([]);

  

 
  // Prison category data
  const [practiceData, setpracticeData] = useState({
    labels: [],
    datasets:[{ 
      label: "Prison Free Funds: All flagged, weight",
      data: [],

    }]

  })

  // Gender category data
  const [practiceData2, setpracticeData2] = useState({
    labels: [],
    datasets:[{ 
      label: "Gender Equality Funds: Weight of holdings with Equileap gender equality scores",
      data: [],

    }]

  })


  // Options for Horizontal Chart
  const options = {
      indexAxis: "y",
    
  }

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
  },
  {
    name: 'Deforestation',
    selector: row => row["Deforestation Free Funds: Deforestation grade"],
    conditionalCellstyles: [{
      when: row=> (row["Deforestation Free Funds: Deforestation grade"]) === "B",
      style:{
        backgroundColor: 'rgb(127, 255, 212)',

      }
    }],
  },
  {
    name: 'Fossil',
    selector:row => row["Fossil Free Funds: Fossil fuel grade"],
  },
  {
    name: 'Prison',
    selector: row => row["Prison Free Funds: Prison industrial complex grade"],
  },
  {
    name: 'Gender',
    selector: row => row["Gender Equality Funds: Gender equality grade"],
  },
  {
    name: 'Weapons',
    selector: row => row["Weapon Free Funds: Military weapon grade"],
  },
  {
    name: 'Guns',
    selector: row => row["Gun Free Funds: Civilian firearm grade"],
  },
  {
    name: 'Tobacco',
    selector: row => row["Tobacco Free Funds: Tobacco grade"],
  },
   
];



//Storing csv data//


// PARSEDDATA.MAP RESULTS IN PRINTING EACH OBJECT INDIVIDUALLY// 


  //const [userData, setUserData] = useState({
    //labels: UserData.map((data) => data.year),
    //datasets: [{
      //label: "number of users gained",
     // data: UserData.map((data) => data.userGain),
    //}]
  //})

 
  
  

  useEffect(() => {
    
   
    // const parseFile = () =>{
    //   Papa.parse(csvData, {
    //     download: true,
    //     header: true, 
    //     skipEmptyLines: true,
    //     complete: function(esgData){
    //       setParsedData(esgData.data);
    //       console.log("Parsed Data", parsedData); 
    //     }
    //   });
    // }

    // parseFile();
    
    //Parse CSV file and store data

    csv(csvData).then(data => {
      console.log(data);
      setParsedData(data);
    })
    
    // async function getData() {
    //   csv(csvData).then(data => {
    //        console.log(data);
    //        setParsedData(data);
    //      })

    // }

  // /  getData();


    // for (let i=0; i< parsedData.length; i++){
  
    //   a.push(parsedData[i]["Fund profile: Shareclass name"]);
    //   b.push(parseFloat(parsedData[i]["Prison Free Funds: All flagged, weight"]));
    //   c.push(parsedData[i]["Fund profile: Shareclass name"]);
    //   d.push(parseFloat(parsedData[i]["Gender Equality Funds: Weight of holdings with Equileap gender equality scores"]));
    
    // }
  

    // for (let i=0; i< parsedData.length; i++){
  
    //   c.push(parsedData[i]["Fund profile: Shareclass name"]);
    //   d.push(parseFloat(parsedData[i]["Gender Equality Funds: Weight of holdings with Equileap gender equality scores"]));
      
     

    // }

  //   setpracticeData( {
  //     labels: a,
  //     datasets: [{
  //     label: "Prison Free Funds: All flagged, weight",
  //     data: b,
  //   }]

  //   })

  //   setpracticeData2( {
  //     labels: c,
  //     datasets: [{
  //     label: "Gender Equality Funds: Weight of holdings with Equileap gender equality scores",
  //     data: d,
  //   }]

  //   })


  // // Get fund data by name and store data
  // const new_fund = get_fund("1919 Socially Responsive Balanced A", parsedData)
  // setindvFund(new_fund);
  // console.log(new_fund, "indvfund");
  // console.log(parsedData);

    
 }, []);

  
 useEffect(() => {

    const a = [];
    const b = [];
    
    const c = [];
    const d = [];

   for (let i=0; i< parsedData.length; i++){
  
      a.push(parsedData[i]["Fund profile: Shareclass name"]);
      b.push(parseFloat(parsedData[i]["Prison Free Funds: All flagged, weight"]));
      c.push(parsedData[i]["Fund profile: Shareclass name"]);
      d.push(parseFloat(parsedData[i]["Gender Equality Funds: Weight of holdings with Equileap gender equality scores"]));
    
    }



      setpracticeData( {
      labels: a,
      datasets: [{
      label: "Prison Free Funds: All flagged, weight",
      data: b,
    }]

    })

    setpracticeData2( {
          labels: c,
          datasets: [{
          label: "Gender Equality Funds: Weight of holdings with Equileap gender equality scores",
          data: d,
        }]
    
        })


    
  

  }, [parsedData]);



  return (

    <Router>
    
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={
              <div style= {{width:'90%', padding: '5%'}}>
                <h2 className= "Heading" >Overview of where my money is invested</h2>
                <h5 className= "Sub-heading">Your account is broken into different financial assests. You have 6 funds.</h5>

                <div style= {{width:'90%'}}> 
                  <BasicTable columns={columns} data={parsedData} />
                </div>
              </div>
            } />


            <Route path="/fund/:id" element={
              <div>
              
                <div style= {{width: 1200}}>
                  <Fund data={parsedData}/> 
                </div>

              </div>
            } />


            <Route path="/prison" element={
              <div>
                <h2>Prison Industry</h2>
              
                <div>
                  <PrisonIndustry data= {parsedData}/>
                </div>

                </div>
            } />


            <Route path="/gender" element={
              <div>
                <h2>Gender Equality</h2>

                <div>
                  <GenderEquality data={parsedData}/> 
                </div>
                

              </div>

            } />


            


            <Route path="/guns" element={
              <div>
                <h2>Guns</h2>

                <div>
                  <Guns data= {parsedData}/> 
                </div>

              </div>

            } />

            <Route path="/fossilfuels" element={
              <div>
                <h2>Fossil Fuels</h2>

                <div>
                  <FossilFuels data= {parsedData}/> 
                </div>

              </div>

            } />

            <Route path="/deforestation" element={
              <div>
                <h2>Deforestation</h2>

                <div>
                  <Deforestation data= {parsedData}/> 
                </div>

              </div>

            } />

            <Route path="/tobacco" element={
              <div>
                <h2>Tobacco</h2>

                <div>
                  <Tobacco data= {parsedData}/> 
                </div>

              </div>

            } />

            <Route path="/weapons" element={
              <div>
                <h2>Weapons</h2>

                <div>
                  <Weapons data= {parsedData}/> 
                </div>

              </div>

            } />
            

            

          </Routes>
        
      
            <Practice name = 'Practice passing props' />

            

        </div>

        
    
      </div>

    </Router>

   

    
  );
}

export default App;
