import React, { useState, useEffect } from "react";
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import CardGroup from "./CardGroup";
import GraphGroup from "./GraphGroup";
import CardGraphSkeleton from "./CardGraphSkeleton";

export default function Statewise(props) {
  const { className } = props;
  const [modal, setModal] = useState(true);
  const [SelectedState, UpdateState] = useState("Delhi");
  const [DeltaIncrease, UpdateDeltaIncrease] = useState([]);
  const [Total, UpdateTotal] = useState(" ");
  const [Deceased, UpdateDeceased] = useState(" ");
  const [Recovered, UpdateRecovered] = useState(" ");
  const [Active, UpdateActive] = useState(" ");

  const [chartData, updateChart] = useState({
    labels: [],
    datasets: [
      {
        labels: "deceased",
        data: [],
      },
    ],
  });
  const [chartDataDeceased, updateChartDeceased] = useState({
    labels: [],
    datasets: [
      {
        label: "deceased",
        data: [],
      },
    ],
  });
  const [chartDataRecovered, updateChartRecovered] = useState({
    labels: [],
    datasets: [
      {
        label: "deceased",
        data: [],
      },
    ],
  });
  const [chartDataActive, updateChartActive] = useState({
    labels: [],
    datasets: [
      {
        label: "deceased",
        data: [],
      },
    ],
  });
  function formGraph() {
    let labelArray = [];
    let str = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      str[i] = `${props.cases.data[i].day}`;
      let res = str[i].split("-");
      labelArray[i] = res[2] + "/" + res[1];
    }
    let lastindex = props.cases.data.length - 1;
    let x;
    let totalcases = [];
    let deceasedcases = [];
    let recoveredcases = [];
    let activecases = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      x = -1;
      for (let j = 0; j < props.cases.data[i].regional.length; j++) {
        if (props.cases.data[i].regional[j].loc === SelectedState) {
          x = j;
          break;
        }
      }
      if (x === -1) {
        totalcases[i] = 0;
        deceasedcases[i] = 0;
        recoveredcases[i] = 0;
        activecases[i] = 0;
      } else {
        totalcases[i] = props.cases.data[i].regional[x].totalConfirmed;
        deceasedcases[i] = props.cases.data[i].regional[x].deaths;
        recoveredcases[i] = props.cases.data[i].regional[x].discharged;
        activecases[i] = totalcases[i] - recoveredcases[i] - deceasedcases[i];
      }
    }
    UpdateTotal(totalcases[lastindex]);
    UpdateActive(activecases[lastindex]);
    UpdateRecovered(recoveredcases[lastindex]);
    UpdateDeceased(deceasedcases[lastindex]);

    updateChart({
      labels: labelArray,
      datasets: [
        {
          label: "Total cases",
          data: totalcases,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: "#DEEDF0",
          backgroundColor: "transparent",
        },
      ],
    });
    updateChartDeceased({
      labels: labelArray,
      datasets: [
        {
          label: "Deceased",
          data: deceasedcases,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: "black",
          backgroundColor: "transparent",
        },
      ],
    });
    updateChartRecovered({
      labels: labelArray,
      datasets: [
        {
          label: "Recovered",
          data: recoveredcases,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: "green",
          backgroundColor: "transparent",
        },
      ],
    });
    updateChartActive({
      labels: labelArray,
      datasets: [
        {
          label: "Active Cases",
          data: activecases,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: "red",
          backgroundColor: "transparent",
        },
      ],
    });
    let newDeltaIncrease=[];
    newDeltaIncrease[0] = 
      totalcases[lastindex] - totalcases[lastindex - 1];
    newDeltaIncrease[1] = 
      activecases[lastindex] - activecases[lastindex - 1];
    newDeltaIncrease[2] = 
      recoveredcases[lastindex] - recoveredcases[lastindex - 1];
    newDeltaIncrease[3] = 
      deceasedcases[lastindex] - deceasedcases[lastindex - 1];
    UpdateDeltaIncrease(newDeltaIncrease);
  }

  useEffect(() => {
    if (props.cases.data) {
      formGraph();
    }
  }, [SelectedState,props.cases.data])
  const toggle = () => setModal(!modal);
  if (props.isLoading) {
    return (
      <CardGraphSkeleton chartData={chartData}/>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.cases != null) {

    const chartOptions = {
      legend: {
        labels: {
          fontColor: "#ffffff",
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Dates",
              fontColor: "#ffffff",
            },
            gridLines: {
              zeroLineColor: '#ffffff'
            },
            ticks: {
              fontColor: "#ffffff",
              autoSkip: true,
              maxTicksLimit: 10,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "",
              fontColor: "#ffffff",
              fontSize: 10,
            },
            gridLines: {
              zeroLineColor: '#ffffff'
            },
            ticks: {
              fontColor: "#ffffff",
            },
          },
        ],
      },
    };

    function changeState(val) {
      UpdateState(val);
      setModal(!modal);
    }
    function scrollIntoGraph(val){
      document.getElementById(`slide-${val}`).scrollIntoView(true)
    }
    
    return (
      <>
        <div className="text-white">
          <Link to="/home" className="text-white">
            India
          </Link>{" "}
          <i className="fa fa-chevron-right"></i>
          <button className="btn btn-link text-white" onClick={toggle}>
            {`${SelectedState}`}
          </button>
        </div>
        <div className="container-fluid">
          <br />
          <Modal isOpen={modal} toggle={toggle} className={className} style={{ color: 'black' }}>
            <ModalBody>
              {props.cases.data[props.cases.data.length-1].regional.map((region, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`region${index}`}
                    name="indianstate"
                    value={region.loc}
                    className="mr-1"
                    checked={SelectedState===region.loc}
                    onChange={()=>{
                      changeState(region.loc)}}
                  />
                  <label htmlFor={`region${index}`}>{region.loc}</label>
                  <br />
                </div>
              ))}

            </ModalBody>
          </Modal>
          <p className="lead">
            <span className="font-weight-bolder">Latest Stats:</span>{" "}
            {`${SelectedState}`}
          </p>
          <CardGroup 
          Total={Total} Active={Active} Recovered={Recovered} Deceased={Deceased}
          DeltaTotal={DeltaIncrease[0]} DeltaActive={DeltaIncrease[1]} DeltaRecovered={DeltaIncrease[2]} DeltaDeceased={DeltaIncrease[3]} scrollIntoGraph={scrollIntoGraph}/>
          <small className="text-muted">{`Last updated: ${props.cases.lastOriginUpdate}`}</small>
          <br />
          <br />
          <GraphGroup chartData={chartData} chartDataActive={chartDataActive} chartDataDeceased={chartDataDeceased} chartDataRecovered={chartDataRecovered} chartOptions={chartOptions}/>
        </div>
      </>
    );
  }
}
