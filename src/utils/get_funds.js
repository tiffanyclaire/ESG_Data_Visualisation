export function get_weapons(fund) {
  const a = [];
  const fossil =
    (fund["Weapon Free Funds: Military weapon, asset"] /
      fund["Fund profile: Fund net assets"]) *
    100;
  const other = 100 - fossil;
  a.push(other);
  a.push(fossil);
  return a;
}
