export function get_allfunds(data) {
  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(data[i]["Fund profile: Shareclass name"]);
  }
  return list;
}
