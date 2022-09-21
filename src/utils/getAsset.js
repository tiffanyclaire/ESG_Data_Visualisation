/**
 * @param {Object} fund - A fund on it's own
 * @param {number} net - Net assets, which is the money invested in that thing
 * @param {string} column -  Name of the column of interest
 */

export function get_asset(fund, net, column) {
  const asset = [];
  const category = Math.round((fund[column] / net) * 100);
  const other = 100 - category;
  asset.push(other);
  asset.push(category);

  return asset;
}
