import React from 'react'




function ReportCard ({data}) {
    return (
        <div class="card-container">
            <div class="card">
                <h4 class="card-title">ESG Ratings</h4>
                <div class="card-text">
                    <h5 class="rating-text">Gender Equality:</h5>
                    <h5 class="rating-text">{data["Gender Equality Funds: Gender equality grade"]}</h5> 
                </div>
                <div class="card-text">
                    <h5 class="rating-text">Deforestation:</h5>
                    <h5 class="rating-text">{data["Deforestation Free Funds: Deforestation grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5 class="rating-text">Fossil Fuels:</h5>
                    <h5 class="rating-text">{data["Fossil Free Funds: Fossil fuel grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5 class="rating-text">Prison:</h5>
                    <h5 class="rating-text">{data["Prison Free Funds: Prison industrial complex grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5 class="rating-text">Weapons:</h5>
                    <h5 class="rating-text">{data["Weapon Free Funds: Military weapon grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5 class="rating-text">Guns:</h5>
                    <h5 class="rating-text">{data["Gun Free Funds: Civilian firearm grade"]}</h5>
                </div>
                <div class="card-text">
                    <h5 class="rating-text">Tobacco:</h5>
                    <h5 class="rating-text">{data["Tobacco Free Funds: Tobacco grade"]}</h5>
                </div>
            </div>
        </div>
    );
}


  

export default ReportCard;