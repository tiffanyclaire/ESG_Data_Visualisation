import React from 'react'




function ReportCard ({data}) {
    return (
        <div class="card-container">
            <div class="card">
                <h4>ESG Report Card</h4>
                <div class="card-text">
                    <h5>Gender Equality:</h5>
                    <h5>{data["Gender Equality Funds: Gender equality grade"]}</h5> 
                </div>
                <div class="card-text">
                    <h5>Deforestation:</h5>
                    <h5>{data["Deforestation Free Funds: Deforestation grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5 class="heading-text">Fossil Fuels:</h5>
                    <h5>{data["Fossil Free Funds: Fossil fuel grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5>Prison:</h5>
                    <h5 class="rating-text">{data["Prison Free Funds: Prison industrial complex grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5>Weapons:</h5>
                    <h5>{data["Weapon Free Funds: Military weapon grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5>Guns:</h5>
                    <h5>{data["Gun Free Funds: Civilian firearm grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5>Tobacco:</h5>
                    <h5>{data["Tobacco Free Funds: Tobacco grade"]}</h5>
                </div>
            </div>
        </div>
    );
}


  

export default ReportCard;