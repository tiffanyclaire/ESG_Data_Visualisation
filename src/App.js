import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Practice from "./components/Practice";
import BarChart from "./components/BarChart";
import BasicTable from "./components/BasicTable";
import Fund from "./components/Fund";
import PrisonIndustry from "./components/PrisonIndustry";
import Guns from "./components/Guns";
import FossilFuels from "./components/FossilFuels";
import GenderEquality from "./components/GenderEquality";
import Deforestation from "./components/Deforestation";
import Tobacco from "./components/Tobacco";
import Weapons from "./components/Weapons";
import Papa from "papaparse";
import csvData from "./MockPortfolio.csv";
import "bootstrap/dist/css/bootstrap.min.css";
import { get_allfunds } from "./utils/getAllFunds.js";
import Layout from "./components/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [parsedData, setparsedData] = useState([]);

  useEffect(() => {
    const parseFile = () => {
      Papa.parse(csvData, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (esgData) {
          setparsedData(esgData.data);
        },
      });
    };

    parseFile();
  }, []);

  console.log("Parsed Data", parsedData);

  const options = {
    plugins: {
      dataLabels: {
        display: true,
        color: "black",
      },
    },
  };

  console.log(parsedData);

  // List of fund names
  const fund_names = get_allfunds(parsedData);

  console.log(fund_names)

  // Options for Horizontal Chart
  //const options = {
  //   indexAxis: "y",

  //}

  //Overview Table Data

  const columns = [
    {
      name: "Asset Name",
      selector: (row) => row["Fund profile: Shareclass name"],
      width: "19%",
      cell: (row) => (
        <Link to={"/fund/" + row["id"]}>
          {row["Fund profile: Shareclass name"]}
        </Link>
      ),
    },
    {
      name: "% Invested",
      selector: (row) => row["Invested"],
    },
    {
      name: "Shareclass Type",
      selector: (row) => row["Fund profile: Shareclass type"],
      width: "12%",
      sortable: true,
    },
    {
      name: (
        <Link className={"link-styles"} to={"/deforestation"}>
          Deforestation
        </Link>
      ),
      selector: (row) => row["Deforestation Free Funds: Deforestation grade"],
      conditionalCellstyles: [
        {
          when: (row) =>
            row["Deforestation Free Funds: Deforestation grade"] === "B",
          style: {
            backgroundColor: "rgb(127, 255, 212)",
          },
        },
      ],
    },
    {
      name: (
        <Link className={"link-styles"} to={"/fossilfuels"}>
          Fossil Fuels
        </Link>
      ),
      selector: (row) => row["Fossil Free Funds: Fossil fuel grade"],
    },
    {
      name: (
        <Link className={"link-styles"} to={"/prison"}>
          Prison Sector
        </Link>
      ),
      selector: (row) =>
        row["Prison Free Funds: Prison industrial complex grade"],
    },
    {
      name: (
        <Link className={"link-styles"} to={"/gender"}>
          Gender
        </Link>
      ),
      selector: (row) => row["Gender Equality Funds: Gender equality grade"],
    },
    {
      name: (
        <Link className={"link-styles"} to={"/weapons"}>
          Weapons
        </Link>
      ),
      selector: (row) => row["Weapon Free Funds: Military weapon grade"],
    },
    {
      name: (
        <Link className={"link-styles"} to={"/guns"}>
          Guns
        </Link>
      ),
      selector: (row) => row["Gun Free Funds: Civilian firearm grade"],
    },
    {
      name: (
        <Link className={"link-styles"} to={"/tobacco"}>
          Tobacco
        </Link>
      ),
      selector: (row) => row["Tobacco Free Funds: Tobacco grade"],
    },
  ];

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Container className="mb-5">
                    <Row className="pt-5">
                      <Col lg={8} className="text-start">
                        <h2 className="fw-bold">
                          Overview of where my money is invested
                        </h2>
                      </Col>
                    </Row>

                    <Row className="mt-2">
                      <h6 className="text-start">
                        Your account is broken into different financial assests.
                        You have 7 funds.
                      </h6>
                      <h6 className="text-start">
                        This data was collected between 1st August 2022 and 31st
                        August 2022{" "}
                      </h6>
                    </Row>
                  </Container>

                  <BasicTable columns={columns} data={parsedData} />  
                </Layout>
              }
            />

            <Route
              path="/fund/:id"
              element={
                <Layout>
                  <Fund data={parsedData} />
                </Layout>
              }
            />

            <Route
              path="/prison"
              element={
                <div>
                  <PrisonIndustry data={parsedData} names={fund_names} />
                </div>
              }
            />

            <Route
              path="/gender"
              element={
                <div>
                  <GenderEquality data={parsedData} names={fund_names} />
                </div>
              }
            />

            <Route
              path="/guns"
              element={
                <div>
                  <Guns data={parsedData} names={fund_names} />
                </div>
              }
            />

            <Route
              path="/fossilfuels"
              element={
                <div>
                  <FossilFuels data={parsedData} names={fund_names} />
                </div>
              }
            />

            <Route
              path="/deforestation"
              element={
                <div>
                  <Deforestation data={parsedData} names={fund_names} />
                </div>
              }
            />

            <Route
              path="/tobacco"
              element={
                <div>
                  <Tobacco data={parsedData} names={fund_names} />
                </div>
              }
            />

            <Route
              path="/weapons"
              element={
                <div>
                  <Weapons data={parsedData} names={fund_names} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
