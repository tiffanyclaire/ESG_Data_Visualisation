export function gender_scoremultiple(data, column) {
  const scores = [];
  for (let i = 0; i < data.length; i++) {
    scores.push(parseFloat(data[i][column]));
  }

  return scores;
}
