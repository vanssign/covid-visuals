import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Statewise(props) {
  const { className } = props;
  const [modal, setModal] = useState(true);
  const [SelectedState, UpdateState] = useState("Delhi");
  var [DeltaIncrease, UpdateDeltaIncrease] = useState([]);
  var [Total, UpdateTotal] = useState(" ");
  var [Deceased, UpdateDeceased] = useState(" ");
  var [Recovered, UpdateRecovered] = useState(" ");
  var [Active, UpdateActive] = useState(" ");

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
          borderColor: "#2980b9",
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
      <>
        <div className="bg-grad text-white">
          <Skeleton />
        </div>
        <div className="container">
          <br />
          <p className="lead">
            <span className="font-weight-bolder"></span>
            <Skeleton />
          </p>
          <div className="row">
            <div className="col-6 col-md-3 pt-4">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4 ">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4 ">
              <div className="container btn bg-dark text-white">
                <p>
                  <Skeleton />
                  <br />
                  <Skeleton />
                </p>
                <small>
                  <Skeleton />
                </small>
              </div>
            </div>
          </div>

          <small className="text-muted">
            <Skeleton />
          </small>
          <br />
          <br />
          <div className="slider">
            <div className="slides">
              <div id="slide-1">
                <Line data={chartData} />
              </div>
            </div>
          </div>
        </div>
      </>
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
    var labelArray = [];
    var str = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      str[i] = `${props.cases.data[i].day}`;
      var res = str[i].split("-");
      labelArray[i] = res[2] + "/" + res[1];
    }

    var x;
    var totalcases = [];
    var deceasedcases = [];
    var recoveredcases = [];
    var activecases = [];


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

    var lastindex = props.cases.data.length - 1;

    function changeState(val) {
      UpdateState(val);
      setModal(!modal);
    }
    function scrollInto1() {
      document.getElementById("slide-1").scrollIntoView(true);
    }
    function scrollInto2() {
      document.getElementById("slide-2").scrollIntoView(true);
    }
    function scrollInto3() {
      document.getElementById("slide-3").scrollIntoView(true);
    }
    function scrollInto4() {
      document.getElementById("slide-4").scrollIntoView(true);
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
        <div className="container">
          <br />
          <Modal isOpen={modal} toggle={toggle} className={className} style={{ color: 'black' }}>
            <ModalBody>
              {props.cases.data[lastindex].regional.map((region, index) => (
                <>
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
                  <label for={`region${index}`}>{region.loc}</label>
                  <br />
                </>
              ))}

            </ModalBody>
          </Modal>
          <p className="lead">
            <span className="font-weight-bolder">Latest Stats:</span>{" "}
            {`${SelectedState}`}
          </p>
          <div className="row">
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => scrollInto1()}
              >
                <p>
                  {`${Total}`}
                  <br />
                  {`${DeltaIncrease[0]}`}{" "}
                  <i className="fa fa-lg  fa-arrow-up"></i>
                </p>
                <small>Total</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => scrollInto2()}
              >
                <p>
                  {`${Active}`}
                  <br />
                  {`${Math.abs(DeltaIncrease[1])}`}{" "}
                  <i className={DeltaIncrease[1]<0?("fa fa-lg fa-arrow-down"):("fa fa-lg fa-arrow-up")}></i>
                </p>
                <small>Active</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => scrollInto3()}
              >
                <p>
                  {`${Recovered}`} <br />
                  {`${DeltaIncrease[2]}`}{" "}
                  <i className={"fa fa-lg fa-arrow-up"}></i>
                </p>
                <small>Recovered</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                className="container btn bg-dark text-white"
                onClick={() => scrollInto4()}
              >
                <p>
                  {`${Deceased}`}
                  <br />
                  {`${DeltaIncrease[3]}`}{" "}
                  <i className="fa fa-lg  fa-arrow-up"></i>
                </p>
                <small>Deceased</small>
              </div>
            </div>
          </div>

          <small className="text-muted">{`Last updated: ${props.cases.lastOriginUpdate}`}</small>
          <br />
          <br />
          <div className="slider">
            <div className="slides">
              <div id="slide-1">
                <Line
                  data={chartData}
                  options={chartOptions}
                />
              </div>
              <div id="slide-2">
                <Line
                  data={chartDataActive}
                  options={chartOptions}
                />
              </div>
              <div id="slide-3">
                <Line
                  data={chartDataRecovered}
                  options={chartOptions}
                />
              </div>
              <div id="slide-4">
                <Line
                  data={chartDataDeceased}
                  options={chartOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
