
export function get_deforest(fund){
  const a = [];
  const forest = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const other = ( 100 - (forest))
  a.push(other)
  a.push(forest)
  return a;

  }



