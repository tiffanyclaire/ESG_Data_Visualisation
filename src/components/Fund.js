import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {get_fund} from '../utils/getFund.js'



function Fund ({data}) {
    const { id } = useParams();
    //Individual Fund
    const [indvFund, setindvFund] = useState([]);

    //Get fund data by name and store data
    const new_fund = get_fund(id, data)
    setindvFund(new_fund);
    console.log(indvFund, "check indvfund");
   
    return (
        <div>

        <h2>Asset Name</h2>
                <h5 className= "Sub-heading">This pension fund is invested in at least 1200 companies</h5>
                <h5 className= "Sub-heading">This data was collected between 1tst August 2022 and 31st August 2022 </h5>
        {/* <h2>{indvFund['id']}</h2> */}
        <h3>Fund ID: { id } </h3>

        </div>
        
    );
}


  

export default Fund;