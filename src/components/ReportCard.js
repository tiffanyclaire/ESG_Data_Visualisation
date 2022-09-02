import React from 'react'




function ReportCard ({data}) {
    return (
        <div className="card-container">
            <div className="card">
                <h4 className="card-title">ESG Ratings</h4>
                <div className="card-text">
                    <h5 className="rating-text">Gender Equality:</h5>
                    <h5 className="rating-text">{data["Gender Equality Funds: Gender equality grade"]}</h5> 
                </div>
                <div className="card-text">
                    <h5 className="rating-text">Deforestation:</h5>
                    <h5 className="rating-text">{data["Deforestation Free Funds: Deforestation grade"]}</h5>
                </div>
                <div className="card-text">
                    <h5 className="rating-text">Fossil Fuels:</h5>
                    <h5 className="rating-text">{data["Fossil Free Funds: Fossil fuel grade"]}</h5>
                </div>
                <div className="card-text">
                    <h5 className="rating-text">Prison:</h5>
                    <h5 className="rating-text">{data["Prison Free Funds: Prison industrial complex grade"]}</h5>
                </div>
                <div className="card-text">
                    <h5 className="rating-text">Weapons:</h5>
                    <h5 className="rating-text">{data["Weapon Free Funds: Military weapon grade"]}</h5>
                </div>
                <div className="card-text">
                    <h5 className="rating-text">Guns:</h5>
                    <h5 className="rating-text">{data["Gun Free Funds: Civilian firearm grade"]}</h5>
                </div>
                <div className="card-text">
                    <h5 className="rating-text">Tobacco:</h5>
                    <h5 className="rating-text">{data["Tobacco Free Funds: Tobacco grade"]}</h5>
                </div>
            </div>
        </div>
    );
}


  

export default ReportCard;