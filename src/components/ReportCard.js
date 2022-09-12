import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function ReportCard({ data }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Title>ESG Ratings</Card.Title>

        <Table>
          <tbody className="text-start">
            <tr>
              <td>Gender</td>
              <td>{data["Gender Equality Funds: Gender equality grade"]}</td>
            </tr>
            <tr>
              <td>Deforestation</td>
              <td>{data["Deforestation Free Funds: Deforestation grade"]}</td>
            </tr>
            <tr>
              <td>Fossil Fuels</td>
              <td>{data["Fossil Free Funds: Fossil fuel grade"]}</td>
            </tr>
            <tr>
              <td>Prison</td>
              <td>
                {data["Prison Free Funds: Prison industrial complex grade"]}
              </td>
            </tr>
            <tr>
              <td>Weapons</td>
              <td>{data["Weapon Free Funds: Military weapon grade"]}</td>
            </tr>
            <tr>
              <td>Guns</td>
              <td>{data["Gun Free Funds: Civilian firearm grade"]}</td>
            </tr>
            <tr>
              <td>Tobacco</td>
              <td>{data["Tobacco Free Funds: Tobacco grade"]}</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

export default ReportCard;
