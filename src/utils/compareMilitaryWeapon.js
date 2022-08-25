
export function compareMilitaryWeapon(data){
    const obj = {
        labels: [],
        data: []
    }
    for (let i=0; i< data.length; i++){
  
        obj.labels.push(data[i]["Fund profile: Shareclass name"]);
        obj.data.push(parseFloat(data[i]["Weapon Free Funds: Military weapon, weight"]));
        
      
      }

      return obj;

  }