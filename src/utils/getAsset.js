
export function get_asset(fund, net, column){
  const asset = [];
  const category = Math.round(((fund[ column ]) / (net) ) * 100)
  const other = ( 100 - (category))
  asset.push(other)
  asset.push(category)

  

  return asset;

  }



