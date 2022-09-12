export function gender_score(fund, column, total) {
  const score = [];
  const gender = fund[column];
  const remainder = total - gender;
  score.push(remainder);
  score.push(gender);
  return score;
}
