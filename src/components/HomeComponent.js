import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Home(props) {
  function formGraph() {
    updateChart({
      labels: labelArray,
      datasets: [
        {
          label: "Total cases",
          data: totalcases,
          pointRadius: 0,
          borderWidth: 3,
          borderColor: "#2980b9",
          backgroundColor:"transparent"
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
          backgroundColor:"transparent"
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
          backgroundColor:"transparent"
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
          backgroundColor:"transparent"
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
          backgroundColor:"transparent"
        },
      ],
    });
  }

  useEffect(() => {
    if (props.cases != null && props.tests != null) {
      formGraph();
    }
  });

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

  if (props.isLoading || props.testsisLoading) {
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
              <div className="container btn bg-primary-grad text-white">
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
              <div className="container btn bg-danger-grad text-white">
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
              <div className="container btn bg-success-grad text-white">
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
              <div className="container btn bg-dark-grad text-white">
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
  } else if (props.testserrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.testserrMess}</h4>
        </div>
      </div>
    );
  } else if (props.cases != null && props.tests != null) {
    console.log(chartData);
    var labelArray = [];
    var testlabelArray = [];
    var str = [];
    var teststr = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      str[i] = `${props.cases.data[i].day}`;
      var res = str[i].split("-");
      labelArray[i] = res[2] + "/" + res[1];
    }
    for (let i = 0; i < props.tests.data.length; i++) {
      teststr[i] = `${props.tests.data[i].day}`;
      var res = teststr[i].split("-");
      testlabelArray[i] = res[2] + "/" + res[1];
    }

    var totalcases = [];
    var deceasedcases = [];
    var recoveredcases = [];
    var activecases = [];
    var nooftests = [];
    for (let i = 0; i < props.cases.data.length; i++) {
      totalcases[i] = props.cases.data[i].summary.total;
      deceasedcases[i] = props.cases.data[i].summary.deaths;
      recoveredcases[i] = props.cases.data[i].summary.discharged;
      activecases[i] = totalcases[i] - recoveredcases[i] - deceasedcases[i];
    }
    for (let i = 0; i < props.tests.data.length; i++) {
      nooftests[i] = props.tests.data[i].totalSamplesTested;
    }
    var lastindex = props.cases.data.length - 1;

    const Total = totalcases[lastindex];
    const Active = activecases[lastindex];
    const Recovered = recoveredcases[lastindex];
    const Deceased = deceasedcases[lastindex];
    const DeltaIncrease = [];
    DeltaIncrease[0] = Math.abs(
      totalcases[lastindex] - totalcases[lastindex - 1]
    );
    DeltaIncrease[1] = Math.abs(
      activecases[lastindex] - activecases[lastindex - 1]
    );
    DeltaIncrease[2] = Math.abs(
      recoveredcases[lastindex] - recoveredcases[lastindex - 1]
    );
    DeltaIncrease[3] = Math.abs(
      deceasedcases[lastindex] - deceasedcases[lastindex - 1]
    );

    const IncreaseFlag = [];
    if (totalcases[lastindex] < totalcases[lastindex - 1]) {
      IncreaseFlag[0] = false;
    } else IncreaseFlag[0] = true;

    if (activecases[lastindex] < activecases[lastindex - 1]) {
      IncreaseFlag[1] = false;
    } else IncreaseFlag[1] = true;

    if (recoveredcases[lastindex] < recoveredcases[lastindex - 1]) {
      IncreaseFlag[2] = false;
    } else IncreaseFlag[2] = true;

    if (deceasedcases[lastindex] < deceasedcases[lastindex - 1]) {
      IncreaseFlag[3] = false;
    } else IncreaseFlag[3] = true;

    const fontawesomeFlag = [];
    for (let i = 0; i < 4; i++) {
      if (IncreaseFlag[i]) {
        fontawesomeFlag[i] = "fa-arrow-up";
      } else fontawesomeFlag[i] = "fa-arrow-down";
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

    const options={scales: {
      xAxes: [{
          gridLines: {
              drawOnChartArea: false
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10
        }
      }],
      yAxes: [{
          gridLines: {
              drawOnChartArea: false
          }
      }]
  }}

    return (
      <>
        <div className="bg-grad text-white">
          India <i className="fa fa-chevron-right"></i>{" "}
          <Link to="/home/state-wise" className="text-white">
            <small>Set State</small>
          </Link>
        </div>
        <div className="container">
          <br />
          <p className="lead">
            <span className="font-weight-bolder">Latest Stats:</span>India
          </p>
          <div className="row">
            <div className="col-6 col-md-3 pt-4">
              <div
                onClick={() => scrollInto1()}
                className="container btn bg-primary-grad text-white"
              >
                <p>
                  {`${Total}`}
                  <br /> {`${DeltaIncrease[0]}`}
                  <i className={`fa fa-lg ${fontawesomeFlag[0]}`}></i>
                </p>
                <small>Total</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4">
              <div
                onClick={() => scrollInto2()}
                className="container btn bg-danger-grad text-white"
              >
                <p>
                  {`${Active}`}
                  <br /> {`${DeltaIncrease[1]}`}
                  <i className={`fa fa-lg ${fontawesomeFlag[1]}`}></i>
                </p>
                <small>Active</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4 ">
              <div
                onClick={() => scrollInto3()}
                className="container btn bg-success-grad text-white"
              >
                <p>
                  {`${Recovered}`}
                  <br /> {`${DeltaIncrease[2]}`}
                  <i className={`fa fa-lg ${fontawesomeFlag[2]}`}></i>
                </p>
                <small>Recovered</small>
              </div>
            </div>
            <div className="col-6 col-md-3 pt-4 ">
              <div
                onClick={() => scrollInto4()}
                className="container btn bg-dark-grad text-white"
              >
                <p>
                  {`${Deceased}`}
                  <br /> {`${DeltaIncrease[3]}`}
                  <i className={`fa fa-lg ${fontawesomeFlag[3]}`}></i>
                </p>
                <small>Deceased</small>
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
                <Line data={chartData} options={options} />
              </div>
              <div id="slide-2">
                <Line data={chartDataActive} options={options}/>
              </div>
              <div id="slide-3">
                <Line data={chartDataRecovered} options={options} />
              </div>
              <div id="slide-4">
                <Line data={chartDataDeceased} options={options}/>
              </div>
              <div id="slide-5">
                <Line data={chartDataTests} options={options} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
