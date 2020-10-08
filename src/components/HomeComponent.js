import React,{useState} from 'react'
import{Line,Bar,Pie} from 'react-chartjs-2'
import { Button } from 'reactstrap'


export default function Home(props) {
    const [chartData,updateChart]= useState({labels:["1","2","3","4","5"],
    datasets:[
      {
          label:"total-cases",
          data:[1,1,1,1,1]
      }
  ]})
  const [chartDataDeceased,updateChartDeceased]=useState({labels:["1","2","3","4","5"],
  datasets:[
    {
        label:"deceased",
        data:[1,1,1,1,1]
    }
]})
const [chartDataRecovered,updateChartRecovered]=useState({labels:["1","2","3","4","5"],
datasets:[
  {
      label:"Recovered",
      data:[1,1,1,1,1]
  }
]})
const [chartDataActive,updateChartActive]=useState({labels:["1","2","3","4","5"],
datasets:[
  {
      label:"active-cases",
      data:[1,1,1,1,1]
  }
]})
    if(props.isLoading){
        return(
            <div className="container-fluid text-center">
                
                    <img src="https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif" className="img-fluid"/>
    
    
            </div>
        )
    }
    else if (props.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
    
                </div>
    
            </div>
    
        )
    }
    else if(props.cases!=null){
      var labelArray=[];
      var str=[]
      for(let i=0;i<props.cases.data.length;i++){
       str[i] =`${props.cases.data[i].day}`;
       var res=str[i].split("-");
       labelArray[i]=res[2]+'/'+res[1];

      }
      var totalcases=[];
      var deceasedcases=[];
      var recoveredcases=[];
      var activecases=[];
      for(let i=0;i<props.cases.data.length;i++){
          totalcases[i]= props.cases.data[i].summary.total;
          deceasedcases[i]= props.cases.data[i].summary.deaths;
          recoveredcases[i]= props.cases.data[i].summary.discharged;
          activecases[i]= totalcases[i]-recoveredcases[i]-deceasedcases[i];
      }
      

      function formGraph(){
console.log(labelArray)
          updateChart({
          labels:labelArray,
          datasets:[{
              label:"Total cases",
              data:totalcases,
              pointRadius: 0,
              borderWidth: 2,
              borderColor:'blue',
              backgroundColor:'rgba(0,0,255,0.1)'

          }]
        })
        updateChartDeceased({
            labels:labelArray,
            datasets:[{
                label:"Deceased",
                data:deceasedcases,
                pointRadius: 0,
                borderWidth: 2,
                borderColor:'black'
            }]
          })
          updateChartRecovered({
            labels:labelArray,
            datasets:[{
                label:"Recovered",
                data:recoveredcases,
                pointRadius: 0,
                borderWidth: 2,
                borderColor:'green',
                backgroundColor:'rgba(0,255,0,0.1)'
  
            }]
          })
          updateChartActive({
            labels:labelArray,
            datasets:[{
                label:"Active Cases",
                data:activecases,
                pointRadius: 0,
                borderWidth: 2,
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.1)'
  
            }]
          })
        
        }

    return (
       
        <div>
             
             <p className="lead">Best viewed on larger screen sizes for now</p>
             <Button onClick={()=>{formGraph()}}>Compute Graphs</Button>
             <br/>
             <br/>
            <Line data={chartData}/>
            <br/>
            <Line data={chartDataActive}/>
            <br/>
            <Line data={chartDataRecovered}/>
            <br/>
            <Line data={chartDataDeceased}/>
            
            
        </div>
    )
}
}