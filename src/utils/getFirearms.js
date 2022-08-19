
export function getFirearms(fund){
 const a = [];

   //for (let i=0; i< fund.length; i++){
      a.push(parseFloat(fund["Gun Free Funds: Civilian firearm, weight"]));
      a.push(parseFloat(fund["Gun Free Funds: Gun manufacturer, weight"]));
      a.push(parseFloat(fund["Gun Free Funds: Civilian firearm, weight"]));
      
      console.log(fund["Gun Free Funds: Civilian firearm, weight"]);
    //}
 return a;

  }



