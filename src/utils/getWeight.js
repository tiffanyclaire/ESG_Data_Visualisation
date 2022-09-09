
export function get_weight(data, column){
    const weights= [];
    for (let i=0; i< data.length; i++){
  
        weights.push(parseFloat(data[i][column]));
        
      }

      return weights;

  }