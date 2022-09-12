export function get_data() {
  const a = [];
  const fossil =
    (fund["Prison Free Funds: All flagged, asset"] /
      fund["Fund profile: Fund net assets"]) *
    100;
  const other = 100 - fossil;
  a.push(other);
  a.push(fossil);
  return a;
}
