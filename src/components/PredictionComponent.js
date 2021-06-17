import React, { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2';

export default function PredictionMech(props){
    const [DataType,setDataType]=useState("")
    const [DateArray,setDateArray]=useState([]);
    const [DataArray,setDataArray]=useState([]);

    useEffect(()=>{
        if(props.cases.data){
        formGraph()
        }
    },[props.cases])
    function formGraph() {

        let labelArray = [];
        let str = [];
        for (let i = 0; i < props.cases.data.length; i++) {
          str[i] = `${props.cases.data[i].day}`;
          let res = str[i].split("-");
          labelArray[i] = res[2] + "/" + res[1];
        }
    
        let datacases = [];
        
        for (let i = 0; i < props.cases.data.length; i++) {
          datacases[i] = props.cases.data[i].summary.total;
        }

        setDateArray(labelArray);
        setDataArray(datacases);
    }


    if(props.isLoading){
        return(
            <div>LOADING</div>
        )
    }
    if(props.errMess){
        return(
            <div>
                Error: {props.errMess}
            </div>
        )
    }
    if(props.cases){
        return(
            <div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-dark" onClick={()=>setDataType("total")}>
                        Total
                    </button>
                    <button className="btn btn-dark" disabled onClick={()=>setDataType("active")}>
                        Active
                    </button>
                    <button className="btn btn-dark" onClick={()=>setDataType("discharged")}>
                        Recovered
                    </button>
                </div>
                {DataType?(<PredictionUI dataArray={DataArray} dateArray={DateArray} dataType={DataType}/>):(<></>)}
            </div>
        )
    }
}

function PredictionUI(props){

    const [chartData,updateChartData]=useState({
        labels: props.dateArray,
        datasets: [
          {
            label: props.dataType,
            data: props.dataArray,
          },
        ],
      })
      console.log(chartData);
      
    return(
        <Line data={chartData}
        />
    )
}
