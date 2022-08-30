import React from 'react'




function ReportCard ({data}) {
    return (
        <div style={{width: 100}}>
            <h4>ESG Report Card</h4>
            <h5>Gender Equality:</h5>
            <h5>{data["Gender Equality Funds: Gender equality grade"]}</h5>
            <h5>Deforestation:</h5>
            <h5>{data["Deforestation Free Funds: Deforestation grade"]}</h5>
            <h5>Fossil Fuels:</h5>
            <h5>{data["Fossil Free Funds: Fossil fuel grade"]}</h5>
            <h5>Prison:</h5>
            <h5>{data["Prison Free Funds: Prison industrial complex grade"]}</h5>
            <h5>Weapons:</h5>
            <h5>{data["Weapon Free Funds: Military weapon grade"]}</h5>
            <h5>Guns:</h5>
            <h5>{data["Gun Free Funds: Civilian firearm grade"]}</h5>
            <h5>Tobacco:</h5>
            <h5>{data["Tobacco Free Funds: Tobacco grade"]}</h5>

        </div>
    );
}


  

export default ReportCard;