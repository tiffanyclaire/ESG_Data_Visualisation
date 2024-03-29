import React, { useState, useEffect, useCallback } from "react";
import { get_weight } from "../utils/getWeight.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Layout from "./Layout.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PrisonIndustry({ data, names }) {
  const options = {
    indexAxis: "y",
    layout: {
      padding: {
        top: 40,
        right: 40,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (item, everything) {
            const value = item.formattedValue;
            return value + "%";
          },
        },
      },
      datalabels: {
        display: true,
        color: "black",
        align: "right",
        anchor: "end",
        formatter: function (value, context) {
          return Math.round(value) + "%";
        },
      },
    },
  };

  // getting three datasets
  const prison1 = get_weight(
    data,
    "Prison Free Funds: Prison industry, weight"
  );
  const prison2 = get_weight(
    data,
    "Prison Free Funds: Private prison operators, weight"
  );
  const prison3 = get_weight(
    data,
    "Prison Free Funds: Border industry, weight"
  );

  const prisonComparison = {
    labels: names,
    datasets: [
      {
        label: "Prison Industry",
        data: prison1,
        backgroundColor: ["rgba(106, 0, 255, 0.7)"],
      },
      {
        label: "Private Prison Operators",
        data: prison2,
        backgroundColor: ["rgba(246, 23, 107, 0.8)"],
      },
      {
        label: "Border Industry",
        data: prison3,
        backgroundColor: ["rgba(255, 102, 0, 0.8)"],
      },
    ],
  };

  return (
    <Layout>
      <Container className="mb-5">
        <Row className="pt-5">
          <Col lg={8} className="text-start">
            <h2 className="fw-bold">Prison</h2>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col lg={8} className="text-start">
            <p>
              Funds are screened for investments in companies with involvement
              in the prison industrial complex.
            </p>
            <h6>
              Click the coloured rectangles in the legend to compare the
              datasets individually.{" "}
            </h6>
            <h6>
              This data was collected between 1st August 2022 and 31st August
              2022{" "}
            </h6>
          </Col>
        </Row>
      </Container>

      <Container className="pb-5 , shadow p-5 mb-5 bg-white rounded">
        <Container className="mb-5">
          <Bar
            data={prisonComparison}
            plugins={[ChartDataLabels]}
            options={options}
          />
        </Container>

        <Container className="mb-5">
          <Row className="mb-3 , justify-content-md-center">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Prison Industry</h4>
              <p>
                The prison industry screen flags companies involved in
                incarceration and detention facilities (including facility
                management, youth and family detention, transportation and
                deportations, facility surveillance and security, and prison
                labor), services in facilities (including communication
                services, health services, banking and financial services, and
                food, commissary, and other goods), and supervision and
                monitoring (including e-carceration, community corrections, and
                bail bonds).
              </p>
            </Col>
          </Row>

          <Row className="mb-3 , justify-content-md-center">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Private Prison Operators</h4>
              <p>
                The private prison operator screen flags companies involved in
                the prison industry such as private for-profit prison operators
                and prison services providers, private prison financing and
                facilities internationally.
              </p>
            </Col>
          </Row>

          <Row className="mb-3 , justify-content-md-center">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Border Industry</h4>
              <p>
                The border industry screen flags companies involved in
                incarceration and detention facilities (including facility
                management, youth and family detention, facility surveillance
                and security, transportation and deportations, and prison
                labor), militarization of the U.S.-Mexico border (including
                border construction and maintenance and border monitoring and
                surveillance), and immigrant monitoring and surveillance
                (including high-tech surveillance of immigrants, e-carceration,
                and bail bonds).
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
}
export default PrisonIndustry;
