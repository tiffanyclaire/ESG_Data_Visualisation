
export function get_fossil(fund){
  const a = [];
  const fossil = (((fund["Fossil Free Funds: Fossil fuel holdings, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const other = ( 100 - (fossil))
  a.push(other)
  a.push(fossil)
  return a;

  }



