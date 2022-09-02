import { useParams } from 'react-router-dom';
import  {get_fund } from '../utils/getFund.js'
import { get_asset } from '../utils/getAsset.js'
import { gender_score } from '../utils/genderScore.js'
import ReportCard from '../components/ReportCard'
import { Pie , Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'





function Fund ({data}) {
    const { id } = useParams();

    const options = {
        plugins:{
          dataLabels: {
            display: true,
            color: 'black',
            align: "end",
            anchor: "end",
          }
        }
      }

      const indvFund = get_fund(id, data);

      const netAssets =  indvFund["Fund profile: Fund net assets"];

      

      const prisonAssets = get_asset(indvFund, netAssets, "Prison Free Funds: All flagged, asset" );
      const deforestAssets = get_asset(indvFund, netAssets, "Deforestation Free Funds: Deforestation-risk consumer brand, asset");
      const fossilAssets = get_asset(indvFund, netAssets, "Fossil Free Funds: Fossil fuel holdings, asset");
      const weaponAssets = get_asset(indvFund, netAssets, "Weapon Free Funds: Military weapon, asset");
      const gunAssets = get_asset(indvFund, netAssets, "Gun Free Funds: Civilian firearm, asset");
      
      const tobaccoAssets = get_asset(indvFund, netAssets, "Tobacco Free Funds: Tobacco producer, asset");

      const genderOverall = gender_score(indvFund, "Gender Equality Funds: Gender equality score - Overall score (out of 100 points)", 100);


      

      const prisonIndustry = {
        labels: ["Other", "Prison Industry Holdings"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: prisonAssets,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      const deforestation = {
        labels: ["Other", "Prison Industry Holdings"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: deforestAssets,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      const fossilFuels = {
        labels: ["Other", "Prison Industry Holdings"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: fossilAssets,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      const weapons = {
        labels: ["Other", "Prison Industry Holdings"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: weaponAssets,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      const guns = {
        labels: ["Other", "Prison Industry Holdings"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: gunAssets,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      const tobacco = {
        labels: ["Other", "Prison Industry Holdings"],
        datasets: [{
        label: "Percent of fund assets found on major weapon screen lists ",
        data: tobaccoAssets,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      const gender = {
        labels: ["Other", "Equality Score out of 100"],
        datasets: [{
        label: "Equality Score out of 100",
        data: genderOverall,
        backgroundColor: [
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 118, 0, 0.6)'
        ]
        
      }]
      };

      




    // All Holdings
    const allHoldings = {
        labels: [],
        datasets: [{
            label: "label",
            data: [],
        }]
    }

   

    return (
        <div style= {{width:'90%', padding: '5%'}}>

        {/* <h2 className= "Heading"> {indvFund["Fund profile: Shareclass name"]}</h2> */}
        <h2 className= "Heading">Shareclass Type: { indvFund["Fund profile: Shareclass name"]} </h2>
        <h3 className= "Sub-heading">Fund ID: { id } </h3>
        <h3 className= "Sub-heading">Shareclass Type: { indvFund["Fund profile: Shareclass type"]} </h3>
        <h5 className= "Sub-heading">This pension fund is invested in at least 1200 companies</h5>
        <h5 className= "Sub-heading">This data was collected between 1tst August 2022 and 31st August 2022 </h5>

        <ReportCard data={indvFund}/>

        <div className= "chartContainer">
            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Gender Equality</h3>
                <Doughnut data={gender} />
            </div>

        </div>

    
        <div className= "chartContainer">
            

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Deforestation</h3>
                <Pie data={deforestation} />
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Fossil Fuels</h3> 
                <Pie data={fossilFuels} />  
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Prison Industrial Complex</h3>
                <Pie data={prisonIndustry} />  
            </div>
        </div>
        
        <div className= "chartContainer">
            

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Military Weapons</h3> 
                <Pie data={weapons} /> 
            </div>

            <div style= {{width:'30%'}}>
                <h3 className= "Heading">Guns</h3>
                <Pie data={guns} />
            </div>

            <div style= {{width:'25%'}}>
                <h3 className= "Heading">Tobacco</h3>
                <Pie data={tobacco} />
            </div>

        
        </div>

        <div className= "chartContainer">

            
        </div>


    

        
        

        </div>
        
    );
}


  

export default Fund;