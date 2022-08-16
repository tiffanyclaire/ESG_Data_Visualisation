import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import DataVis from './components/DataVis'
import Practice from './components/Practice'
import BarChart from './components/BarChart'
import BasicTable from './components/BasicTable'
import HorizontalChart from './components/HorizontalChart'

import {UserData} from './Data';
import { } from 'd3';
import Papa from 'papaparse';
import csvData from './investValues.csv';




function App() {

  const [parsedData, setParsedData] = useState([]);

  // Options for Horizontal Chart
  const options = {
      indexAxis: "y",
    
  }


const columns= [
  {
    name: 'Asset Name',
    selector: row => row["Fund profile: Shareclass name"],
    width: "18%",
    cell: (row) =>  (
      <Link to={'/fund/'+ row["Fund profile: Shareclass name"]}>{row["Fund profile: Shareclass name"]}</Link>
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

  const [dataTable, setdataTable] = useState({})

  const [practiceData, setpracticeData] = useState({
    labels: [],
    datasets:[{ 
      label: "Prison Free Funds: All flagged, weight",
      data: [],

    }]

  })


  const [practiceData2, setpracticeData2] = useState({
    labels: [],
    datasets:[{ 
      label: "Gender Equality Funds: Weight of holdings with Equileap gender equality scores",
      data: [],

    }]

  })
  

  useEffect(() => {
    const a = [];
    const b = [];
    

    const c = [];
    const d = [];
    

    Papa.parse(csvData, {
      download: true,
      header: true, 
      skipEmptyLines: true,
      complete: function(esgData){
        setParsedData(esgData.data);
        console.log("Parsed Data", parsedData); 
      }
    });

    for (let i=0; i< parsedData.length; i++){
      console.log(parsedData[i], "for loop");//
  
  
      a.push(parsedData[i]["Fund profile: Shareclass name"]);
      b.push(parseFloat(parsedData[i]["Prison Free Funds: All flagged, weight"]));
      console.log("a", a);
      console.log("b", b);
     

    }
    console.log("a", a);
    console.log("b", b);


    for (let i=0; i< parsedData.length; i++){
      console.log(parsedData[i], "for loop");//
  
  
      c.push(parsedData[i]["Fund profile: Shareclass name"]);
      d.push(parseFloat(parsedData[i]["Gender Equality Funds: Weight of holdings with Equileap gender equality scores"]));
      console.log("a", a);
      console.log("b", b);
     

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

    

    
  }, [parsedData])

  

  // BOTH CSV READERS WORK //

   //useEffect(() => {
   // csv(csvData).then(data => {
    // console.log(data);
      //});
  
   // }, []);

    //csv(csvData).then(function(data){
     // console.log(data)
     // })
      //.catch(function(error){//

     // })

    




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

            <Route path="/prison" element={
              <div>
                <h2>First Graph</h2>

                <div style= {{width: 1200}}>
                  <BarChart chartData={practiceData}/> 
                </div>

              </div>

            } />


            <Route path="/gender" element={
              <div>
                <h2>Gender Equality</h2>

                <div style= {{width: 1200}}>
                  <BarChart chartData={practiceData2}/> 
                </div>

              </div>

            } />


            <Route path="/fund/:id" element={
              <div>
                <h2>Asset Name</h2>
                <h5 className= "Sub-heading">This pension fund is invested in at least 1200 companies</h5>
                <h5 className= "Sub-heading">This data was collected between 1tst August 2022 and 31st August 2022 </h5>

                <div style= {{width: 1200}}>
                  <HorizontalChart chartData={practiceData2} options={options}/> 
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
