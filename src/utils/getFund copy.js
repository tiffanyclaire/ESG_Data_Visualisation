
export function get_fund(name, parsedData){
    for (let i=0; i<parsedData.length; i++){
      if (parsedData[i]["Fund profile: Shareclass name"] === name)
      return parsedData[i];
     

    }

  }



