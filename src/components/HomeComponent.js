import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Home(props) {
  function formGraph() {

    let labelArray = [];
    let testlabelArray = [];
    let str = [];
    let teststr = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      str[i] = `${props.cases.data[i].day}`;
      let res = str[i].split("-");
      labelArray[i] = res[2] + "/" + res[1];
    }
    for (let i = 0; i < props.tests.data.length; i++) {
      teststr[i] = `${props.tests.data[i].day}`;
      let res = teststr[i].split("-");
      testlabelArray[i] = res[2] + "/" + res[1];
    }

    let totalcases = [];
    let deceasedcases = [];
    let recoveredcases = [];
    let activecases = [];
    let nooftests = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      totalcases[i] = props.cases.data[i].summary.total;
      deceasedcases[i] = props.cases.data[i].summary.deaths;
      recoveredcases[i] = props.cases.data[i].summary.discharged;
      activecases[i] = totalcases[i] - recoveredcases[i] - deceasedcases[i];
    }
    for (let i = 0; i < props.tests.data.length; i++) {
      nooftests[i] = props.tests.data[i].totalSamplesTested;
    }

    let lastindex = props.cases.data.length - 1;
    UpdateTotal(totalcases[lastindex]);
    UpdateRecovered(recoveredcases[lastindex]);
    UpdateActive(activecases[lastindex]);
    UpdateDeceased(deceasedcases[lastindex]);

    let newDeltaIncrease = [];
    newDeltaIncrease[0] =
      totalcases[lastindex] - totalcases[lastindex - 1];
    newDeltaIncrease[1] =
      activecases[lastindex] - activecases[lastindex - 1];
    newDeltaIncrease[2] =
      recoveredcases[lastindex] - recoveredcases[lastindex - 1];
    newDeltaIncrease[3] =
      deceasedcases[lastindex] - deceasedcases[lastindex - 1];
    UpdateDeltaIncrease(newDeltaIncrease);

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
    updateChartTests({
      labels: testlabelArray,
      datasets: [
        {
          label: "Samples Tested",
          data: nooftests,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: "orange",
          backgroundColor: "transparent",
        },
      ],
    });

  }

  useEffect(() => {
    if (props.cases.data != null && props.tests != null) {
      formGraph();
    }
  }, [props.cases, props.tests]);

  const [chartData, updateChart] = useState({
    labels: [],
    datasets: [
      {
        label: "deceased",
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
  const [chartDataTests, updateChartTests] = useState({
    labels: [],
    datasets: [
      {
        label: "deceased",
        data: [],
      },
    ],
  });
  const [DeltaIncrease, UpdateDeltaIncrease] = useState([]);
  const [Total, UpdateTotal] = useState(" ");
  const [Deceased, UpdateDeceased] = useState(" ");
  const [Recovered, UpdateRecovered] = useState(" ");
  const [Active, UpdateActive] = useState(" ");

  if (props.isLoading || props.testsisLoading) {
    return (
      <>
        <div className="bg-grad text-white">
          <Skeleton />
        </div>
        <div>
          <br />
          <p className="lead">
            <span className="font-weight-bolder"></span>
            <Skeleton />
          </p>
          <div className="container">
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
  } else if (props.testserrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.testserrMess}</h4>
        </div>
      </div>
    );
  } else if (props.cases != null && props.tests != null) {

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
          India <i className="fa fa-chevron-right"></i>{" "}
          <Link to="/home/state-wise" className="text-white">
            <small>Set State</small>
          </Link>
        </div>
        <div className="container-fluid">
          <br />
          <p className="lead">
            <span className="font-weight-bolder">Latest Stats: </span>India
          </p>
          <div className="container">
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
          </div>

          <small className="text-muted">
            {`Last updated: ${props.cases.lastOriginUpdate}`}
          </small>
          <br />
          <br />
          <div className="slider">
            <div className="slides">
              <div id="slide-1">
                <Line data={chartData} options={chartOptions} />
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
              <div id="slide-5">
                <Line
                  data={chartDataTests}
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
