import { useParams } from "react-router-dom";
import { get_fund } from "../utils/getFund.js";
import { get_asset } from "../utils/getAsset.js";
import { gender_score } from "../utils/genderScore.js";
import ReportCard from "../components/ReportCard";
import { Doughnut } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Fund({ data }) {
  const { id } = useParams();

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (item, everything) {
            const value = item.formattedValue;
            const col = item.label;
            console.log(item);
            return col + ": " + value + "%";
          },
        },
      },

      dataLabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",
      },
    },
  };

  // tooltipItem.dataset.Index
  const indvFund = get_fund(id, data);

  const netAssets = indvFund["Fund profile: Fund net assets"];

  const prisonAssets = get_asset(
    indvFund,
    netAssets,
    "Prison Free Funds: All flagged, asset"
  );
  const deforestAssets = get_asset(
    indvFund,
    netAssets,
    "Deforestation Free Funds: Deforestation-risk producer, asset"
  );
  const fossilAssets = get_asset(
    indvFund,
    netAssets,
    "Fossil Free Funds: Fossil fuel holdings, asset"
  );
  const weaponAssets = get_asset(
    indvFund,
    netAssets,
    "Weapon Free Funds: Military weapon, asset"
  );
  const gunAssets = get_asset(
    indvFund,
    netAssets,
    "Gun Free Funds: Civilian firearm, asset"
  );
  const tobaccoAssets = get_asset(
    indvFund,
    netAssets,
    "Tobacco Free Funds: Tobacco producer, asset"
  );
  const genderOverall = gender_score(
    indvFund,
    "Gender Equality Funds: Gender equality score - Overall score (out of 100 points)",
    100
  );

  console.log(deforestAssets);

  const prisonIndustry = {
    labels: ["Other", "Prison All Flagged Holdings"],
    datasets: [
      {
        label: "Percent of fund assets found on major weapon screen lists ",
        data: prisonAssets,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(53, 0, 231, 0.6)"],
      },
    ],
  };

  const deforestation = {
    labels: ["Other", "Producer Holdings"],
    datasets: [
      {
        label:
          "Percent of fund assets found on deforestation producer screen lists ",
        data: deforestAssets,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(0, 172, 53, 0.6)"],
      },
    ],
  };

  const fossilFuels = {
    labels: ["Other", "Fossil Fuel Holdings"],
    datasets: [
      {
        label: "Percent of fund assets found on major weapon screen lists ",
        data: fossilAssets,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(255, 118, 0, 0.6)"],
      },
    ],
  };

  const weapons = {
    labels: ["Other", "Military Weapon Holdings"],
    datasets: [
      {
        label: "Percent of fund assets found on major weapon screen lists ",
        data: weaponAssets,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(0, 61, 211, 0.8)"],
      },
    ],
  };

  const guns = {
    labels: ["Other", "Civilian Firearm Holdings"],
    datasets: [
      {
        label: "Percent of fund assets found on major weapon screen lists ",
        data: gunAssets,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(255, 66, 184, 0.8)"],
      },
    ],
  };

  const tobacco = {
    labels: ["Other", "Tobacco Producer Holdings"],
    datasets: [
      {
        label: "Percent of fund assets found on major weapon screen lists ",
        data: tobaccoAssets,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(234, 0, 0, 0.8)"],
      },
    ],
  };

  const gender = {
    labels: ["Other", "Equality Score out of 100"],
    datasets: [
      {
        label: "Equality Score out of 100",
        data: genderOverall,
        backgroundColor: ["rgba(0, 0, 0, 0.1)", "rgba(0, 151, 255, 0.6)"],
      },
    ],
  };

  // All Holdings
  const allHoldings = {
    labels: [],
    datasets: [
      {
        label: "label",
        data: [],
      },
    ],
  };

  return (
    <Container className="mb-5">
      <Container className="mb-5">
        <Row className="pt-5">
          <Col md={7} className="text-start">
            <h2 className="fw-bold">
              {indvFund["Fund profile: Shareclass name"]}{" "}
            </h2>
            <h4>{indvFund["Fund profile: Shareclass type"]} </h4>

            <Row className="mt-5">
              <Col md={4}>
                <p className="fw-bold">Asset Manager:</p>
                <p className="text-start">
                  {indvFund["Fund profile: Asset manager"]}{" "}
                </p>
              </Col>

              <Col md={4}>
                <p className="fw-bold">Category Group:</p>
                <p className="text-start">
                  {" "}
                  {indvFund["Fund profile: Category group"]}{" "}
                </p>
              </Col>

              <Col md={4}>
                <p className="fw-bold">Ticker:</p>
                <p className="text-start">
                  {indvFund["Fund profile: Ticker"]}{" "}
                </p>
              </Col>
            </Row>

            <Row className="mt-3">
              <p className="text-start">
                Data is provided by As you Sow, a non-profit foundation which
                promotes shareholder advocacy, social responsibility and
                transparency. Funds are graded based on their total exposure to
                each of the ESG factors, measured as the precent of fund assets
                invested in holdings flagged by the respective company screens.
                If a fund does have fossil fuel exposure in the form of direct
                stock holdings of companies on the five fossil fuel company
                screens, a letter grade is assigned based on the level of
                exposure. For example a fund with 0% exposure to Fossil Fuels
                will be assigned an 'A' Grade.{" "}
              </p>
              <h6 className="text-start">
                This pension fund is invested in at least 1200 companies
              </h6>
              <h6 className="text-start">
                This data was collected between 1st August 2022 and 31st August
                2022{" "}
              </h6>
            </Row>
          </Col>

          <Col md={{ span: 3, offset: 2 }}>
            <ReportCard data={indvFund} />
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 , shadow p-5 mb-5 bg-white rounded">
        <Row className="mb-5">
          <Col md={6} className="text-start">
            <h4 className="mb-3">Equileap Gender Equality Score</h4>
            <h6 className="mb-3">
              These insights are provided by Equileap; a leading provider of
              gender equality data and insights.{" "}
            </h6>
            <p>
              This is a market-value weighted average of the individual company
              scores of the fund's holdings on Equileap's 100-point scale. In
              other words Company-level Equileap scores are averaged and
              weighted by the amount the fund invests in these companies.{" "}
            </p>
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="text-start">
            <h5></h5>
            <Doughnut data={gender} />
          </Col>
        </Row>

        <Container className="mb-5 , pt-5">
          <Row className="mb-3">
            <Col md={8} className="text-start">
              <h4 className="mb-3">Fund Holdings Breakdown</h4>
              <h6>
                This fund has been screened for direct stock holdings in each of
                the ESG categories. 
              </h6>
              <p>
                Discover below the percentage of the fund's assets which are
                invested the factors you care about. The formula for holding weight is holding market value divided by the sum of the market value for all long holdings in the portfolio. Long holdings are investments that are held for one year or more. Short-term holdings are not considered in this calculation. {" "}
              </p>
            </Col>
          </Row>

          <Row className="mt-5, mb-5 , justify-content-center">
            <Col md={4} className="text-start">
              <h5>Deforestation</h5>
              <Doughnut data={deforestation} options={options} />
            </Col>

            <Col md={4} className="text-start">
              <h5>Fossil Fuels</h5>
              <Doughnut data={fossilFuels} options={options} />
            </Col>

            <Col md={4} className="text-start">
              <h5>Prison Industry</h5>
              <Doughnut data={prisonIndustry} options={options} />
            </Col>
          </Row>

          <Row className="mt-5 , justify-content-center">
            <Col md={4} className="text-start">
              <h5>Weapons</h5>
              <Doughnut data={weapons} options={options} />
            </Col>

            <Col md={4} className="text-start">
              <h5>Guns</h5>
              <Doughnut data={guns} options={options} />
            </Col>

            <Col md={4} className="text-start">
              <h5>Tobacco</h5>
              <Doughnut data={tobacco} options={options} />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Fund;
