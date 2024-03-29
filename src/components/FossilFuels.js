import React, { useState, useEffect, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { get_weight } from "../utils/getWeight.js";
import Layout from "./Layout.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FossilFuels({ data, names }) {
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
  const prison1 = get_weight(data, "Fossil Free Funds: Coal industry, weight");
  const prison2 = get_weight(
    data,
    "Fossil Free Funds: Oil / gas industry, weight"
  );
  const prison3 = get_weight(
    data,
    "Fossil Free Funds: Fossil-fired utilities, weight"
  );

  const fossilComparison = {
    labels: names,
    datasets: [
      {
        label: "Coal",
        data: prison1,
        backgroundColor: ["rgba(0, 0, 0, 0.6)"],
      },
      {
        label: "Oil/Gas",
        data: prison2,
        backgroundColor: ["rgba(255, 102, 0, 0.8)"],
      },
      {
        label: "Utilities",
        data: prison3,
        backgroundColor: ["rgba(0, 41, 234, 0.8)"],
      },
    ],
  };

  return (
    <Layout>
      <Container className="mb-5">
        <Row className="pt-5">
          <Col lg={8} className="text-start">
            <h2 className="fw-bold">Fossil Fuels</h2>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col lg={8} className="text-start">
            <p>
              Discover how much of your investments are invested in companies
              which are involved in the extraction and distribution of fossil
              fuels.
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
            data={fossilComparison}
            plugins={[ChartDataLabels]}
            options={options}
          />
        </Container>

        <Container className="mb-5">
          <Row className="mb-3 , justify-content-md-center">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Coal</h4>
              <p>
                The coal industry screen consists of companies designated by
                Morningstar industry classifications as Thermal Coal or Coking
                Coal; companies from the Global Coal Exit List marked as Mining
                or Services for Coal Industry Sector.
              </p>
            </Col>
          </Row>

          <Row className="mb-3 , justify-content-md-center">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Oil and Gas</h4>
              <p>
                The oil/gas screen consists of companies designated by
                Morningstar industry classifications as Oil and Gas Drilling,
                Oil and Gas Extraction and Production, Oil and Gas Equipment and
                Services, Oil and Gas Integrated, Oil and Gas Midstream, and Oil
                and Gas Refining and Marketing; upstream and midstream companies
                from the Global Oil/Gas Exit List.
              </p>
            </Col>
          </Row>

          <Row className="mb-3 , justify-content-md-center">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Utilities</h4>
              <p>
                The fossil-fired utilities screen consists of companies
                designated by Morningstar industry classifications as
                Utilities-Independent Power Producers, Utilities-Renewable,
                Utilities-Diversified, Utilities-Regulated Electric, and
                Utilities-Regulated Gas. Despite the name, the
                Utilities-Renewable industry classification includes companies
                that distribute gas and/or burn fossil fuel for power
                generation. It also includes companies from the Global Coal Exit
                List marked as Power for Coal Industry Sector. We remove any
                companies in these categories that are engaged in 100% renewable
                operations, pure transmission, or otherwise don't distribute gas
                or burn fossil fuels to generate power.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
}
export default FossilFuels;
