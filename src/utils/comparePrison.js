
export function comparePrison(data){
    const obj = {
        labels: [],
        data: []
    }
    for (let i=0; i< data.length; i++){
  
        obj.labels.push(data[i]["Fund profile: Shareclass name"]);
        obj.data.push(parseFloat(data[i]["Prison Free Funds: All flagged, weight"]));
        
      
      }
      return obj;

  }