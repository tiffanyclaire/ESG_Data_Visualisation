
export function get_asset(fund, net, column){
  const asset = [];
  const category = (((fund[ column ]) / (net) ) * 100)
  const other = ( 100 - (category))
  asset.push(other)
  asset.push(category)
  console.log(category, "CATEGORY")
  console.log(net, "PASSED NET")
  console.log(column, "PASSED CATEGORY")

  return asset;

  }



