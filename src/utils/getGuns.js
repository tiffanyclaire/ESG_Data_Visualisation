
export function get_guns(fund){
  const a = [];
  const fossil = (((fund["Gun Free Funds: Civilian firearm, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const other = ( 100 - (fossil))
  a.push(other)
  a.push(fossil)
  return a;

  }



