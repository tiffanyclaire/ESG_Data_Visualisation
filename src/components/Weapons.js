import { get_weight } from '../utils/getWeight.js'
import { Bar } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

function Weapons ({data, names}) {

    const options = {
        plugins:{
          datalabels: {
            display: true,
            color: 'black',
            align: "top",
            anchor: "end",
            offset: 10,
            formatter: function(value, context) {
                return  Math.round(value) + '%'
            }
          }
        }
      };

      // getting three datasets
    const prison1 = get_weight(data, "Weapon Free Funds: Military weapon, weight"); 
    const prison2= get_weight(data, "Weapon Free Funds: Major military contractors, weight");
    const prison3 = get_weight(data, "Weapon Free Funds: Nuclear weapons, weight");
    const prison4 = get_weight(data, "Weapon Free Funds: Cluster munitions / landmines, weight");

    
    const weaponsComparison = {
        labels: names,
        datasets: [{
        label: "Military",
        data: prison1,
        backgroundColor: [
            'rgba(29, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Contractor",
        data: prison2,
        backgroundColor: [
            'rgba(106, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Nuclear",
        data: prison3,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      },
      {
        label: "Cluster",
        data: prison4,
        backgroundColor: [
            'rgba(194, 0, 255, 0.7)'
        ]
        
      }
        ]
      }






    return (
        <div style= {{width:'90%', padding: '5%'}}>

            <div className= "containerLarge">  
                <h3 className= "Heading">Weapons</h3> 
                <div className="barChart">
                    <Bar data= {weaponsComparison} plugins={[ChartDataLabels]} options={options}/>
                </div>
            </div>
        </div>


    );


}
export default Weapons