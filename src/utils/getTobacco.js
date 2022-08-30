
export function get_tobacco(fund){
  const a = [];
  const fossil = (((fund["Tobacco Free Funds: Tobacco producer, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const other = ( 100 - (fossil))
  a.push(other)
  a.push(fossil)
  return a;

  }



