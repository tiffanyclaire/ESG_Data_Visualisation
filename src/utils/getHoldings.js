
export function get_holdings(fund){
  const a = [];
  const forest = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const fossil = (((fund["Fossil Free Funds: Fossil fuel holdings, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const tobacco = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const gender = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const weapon = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const guns = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const prison = (((fund["Deforestation Free Funds: Deforestation-risk consumer brand, asset"]) / (fund["Fund profile: Fund net assets"]) ) * 100)
  const other = ( 100 - (forest))
  a.push(other)
  a.push(forest)
  return a;

  }



