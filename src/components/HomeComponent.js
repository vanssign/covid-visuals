import React,{useState} from 'react'
import{Line,Bar,Pie} from 'react-chartjs-2'
import { Button } from 'reactstrap'


export default function Home(props) {
    const [chartData,updateChart]= useState({labels:["1","2","3","4","5"],
    datasets:[
      {
          label:"covid-cases",
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
      for(let i=0;i<props.cases.data.length;i++){
          labelArray[i]=`${props.cases.data[i].day}`;
      }
      var totalcases=[];
      for(let i=0;i<props.cases.data.length;i++){
          totalcases[i]= props.cases.data[i].summary.total
      }
      function formGraph(){

          updateChart({
          labels:labelArray,
          datasets:[{
              label:"Total cases",
              data:totalcases,
              pointRadius: 0,
              borderWidth: 2

          }]
        })
        }

    return (
       
        <div>
             {console.log(chartData)}
             <p className="lead">Best viewed on larger screen sizes for now</p>
            <Line data={chartData}/>
            <Button onClick={()=>{formGraph()}}>Compute Graph</Button>
        </div>
    )
}
}