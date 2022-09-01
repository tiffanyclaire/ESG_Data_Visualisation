
import { csv } from 'd3';
import csvData from '../investValues.csv';

export function parse_CSV(){
    let parsed= [];
    csv(csvData).then(data => {
    console.log(data);
    parsed.push(data);

  })
  return parsed

}