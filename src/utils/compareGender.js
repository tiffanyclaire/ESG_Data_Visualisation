
export function compareGender(data){
    const obj = {
        labels: [],
        data: []
    }
    for (let i=0; i< data.length; i++){
  
        obj.labels.push(data[i]["Fund profile: Shareclass name"]);
        obj.data.push(data[i]["Gender Equality Funds: Gender equality score - Overall score (out of 100 points)"]);
        
      
      }

      return obj;

  }