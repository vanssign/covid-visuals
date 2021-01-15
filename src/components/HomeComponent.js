import React, {useState, useEffect} from 'react'
import {Line, Bar, Pie} from 'react-chartjs-2'
import {Button, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



export default function Home(props) {
    const [chartData, updateChart] = useState({
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        datasets: [
            {
                label: "total-cases",
                data: [
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            }
        ]
    })
    const [chartDataDeceased, updateChartDeceased] = useState({
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        datasets: [
            {
                label: "deceased",
                data: [
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            }
        ]
    })
    const [chartDataRecovered, updateChartRecovered] = useState({
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        datasets: [
            {
                label: "Recovered",
                data: [
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            }
        ]
    })
    const [chartDataActive, updateChartActive] = useState({
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        datasets: [
            {
                label: "active-cases",
                data: [
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            }
        ]
    })
    const [chartDataTests, updateChartTests] = useState({
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        datasets: [
            {
                label: "no. of tests",
                data: [
                    1,
                    1,
                    1,
                    1,
                    1
                ]
            }
        ]
    })
    if (props.isLoading || props.testsisLoading) {

        return (
            <div className="container-fluid text-center">

                <img src="https://64.media.tumblr.com/30989303b244278454e07c53dd3a47ac/tumblr_nxa257Q6Zh1uzo3myo1_500.gif" className="img-fluid"/>


            </div>
        )
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{
                        props.errMess
                    }</h4>

                </div>

            </div>

        )
    } else if (props.testserrMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{
                        props.testserrMess
                    }</h4>

                </div>
            </div>

        )
    } else if (props.cases != null && props.tests != null) {
        var labelArray = [];
        var testlabelArray = [];
        var str = [];
        var teststr = [];
        for (let i = 0; i < props.cases.data.length; i++) {
            str[i] = `${
                props.cases.data[i].day
            }`;
            var res = str[i].split("-");
            labelArray[i] = res[2] + '/' + res[1];

        }
        for (let i = 0; i < props.tests.data.length; i++) {
            teststr[i] = `${
                props.tests.data[i].day
            }`;
            var res = teststr[i].split("-");
            testlabelArray[i] = res[2] + '/' + res[1];

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
        DeltaIncrease[0] = Math.abs(totalcases[lastindex] - totalcases[lastindex - 1]);
        DeltaIncrease[1] = Math.abs(activecases[lastindex] - activecases[lastindex - 1])
        DeltaIncrease[2] = Math.abs(recoveredcases[lastindex] - recoveredcases[lastindex - 1])
        DeltaIncrease[3] = Math.abs(deceasedcases[lastindex] - deceasedcases[lastindex - 1])

        const IncreaseFlag = [];
        if (totalcases[lastindex] < totalcases[lastindex - 1]) {
            IncreaseFlag[0] = false
        } else 
            IncreaseFlag[0] = true;
        
        if (activecases[lastindex] < activecases[lastindex - 1]) {
            IncreaseFlag[1] = false
        } else 
            IncreaseFlag[1] = true;
        
        if (recoveredcases[lastindex] < recoveredcases[lastindex - 1]) {
            IncreaseFlag[2] = false
        } else 
            IncreaseFlag[2] = true;
        
        if (deceasedcases[lastindex] < deceasedcases[lastindex - 1]) {
            IncreaseFlag[3] = false
        } else 
            IncreaseFlag[3] = true;
        

        const fontawesomeFlag = [];
        for (let i = 0; i < 4; i++) {
            if (IncreaseFlag[i]) {
                fontawesomeFlag[i] = 'fa-arrow-up'
            } else 
                fontawesomeFlag[i] = 'fa-arrow-down'
            
        }


        function formGraph() {
            document.getElementById('btnCompute').remove();

            updateChart({
                labels: labelArray,
                datasets: [
                    {
                        label: "Total cases",
                        data: totalcases,
                        pointRadius: 0,
                        borderWidth: 2,
                        borderColor: 'blue',
                        backgroundColor: 'rgba(0,0,255,0.1)'
                    }
                ]
            })
            updateChartDeceased({
                labels: labelArray,
                datasets: [
                    {
                        label: "Deceased",
                        data: deceasedcases,
                        pointRadius: 0,
                        borderWidth: 2,
                        borderColor: 'black'
                    }
                ]
            })
            updateChartRecovered({
                labels: labelArray,
                datasets: [
                    {
                        label: "Recovered",
                        data: recoveredcases,
                        pointRadius: 0,
                        borderWidth: 2,
                        borderColor: 'green',
                        backgroundColor: 'rgba(0,255,0,0.1)'
                    }
                ]
            })
            updateChartActive({
                labels: labelArray,
                datasets: [
                    {
                        label: "Active Cases",
                        data: activecases,
                        pointRadius: 0,
                        borderWidth: 2,
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.1)'

                    }
                ]
            })
            updateChartTests({
                labels: testlabelArray,
                datasets: [
                    {
                        label: "Samples Tested",
                        data: nooftests,
                        pointRadius: 0,
                        borderWidth: 2,
                        borderColor: 'orange',
                        backgroundColor: 'rgba(253,227,167,0.5)'

                    }
                ]
            })

        }

        function scrollInto1(){
            document.getElementById("slide-1").scrollIntoView(true);
        }
        function scrollInto2(){
            document.getElementById("slide-2").scrollIntoView(true);
        }
        function scrollInto3(){
            document.getElementById("slide-3").scrollIntoView(true);
        }
        function scrollInto4(){
            document.getElementById("slide-4").scrollIntoView(true);
        }

        return (
            <>
                <Breadcrumb>
                    <BreadcrumbItem active>India</BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/state-wise">
                            <small className="text-info">State</small>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="container">
                    <br/>
                    <p className="lead">
                        <span className="font-weight-bolder">Latest Stats:
                        </span>India</p>
                    <p>Looking for&nbsp;
                        <Link className="text-info" to="/state-wise">State-Wise</Link>
                        &nbsp;data?</p>
                    <div className="row">
                        <div className="col-6 col-md-3 pt-4">
                            <button onClick={()=>scrollInto1()} className="container btn btn-primary">
                                <p>{
                                    `${Total}`
                                }<br/> {
                                    `${
                                        DeltaIncrease[0]
                                    }`
                                }
                                    <i className={
                                        `fa fa-lg ${
                                            fontawesomeFlag[0]
                                        }`
                                    }></i>
                                </p>
                                <small>Total</small>
                            </button>
                        </div>
                        <div className="col-6 col-md-3 pt-4">
                            <button onClick={()=>scrollInto2()} className="container btn btn-danger">
                                <p>{
                                    `${Active}`
                                }<br/> {
                                    `${
                                        DeltaIncrease[1]
                                    }`
                                }
                                    <i className={
                                        `fa fa-lg ${
                                            fontawesomeFlag[1]
                                        }`
                                    }></i>
                                </p>
                                <small>Active</small>
                            </button>
                        </div>
                        <div className="col-6 col-md-3 pt-4 ">
                            <button onClick={()=>scrollInto3()} className="container btn btn-success">
                                <p>{
                                    `${Recovered}`
                                }
                                    <br/> {
                                    `${
                                        DeltaIncrease[2]
                                    }`
                                }
                                    <i className={
                                        `fa fa-lg ${
                                            fontawesomeFlag[2]
                                        }`
                                    }></i>
                                </p>
                                <small>Recovered</small>
                            </button>
                        </div>
                        <div className="col-6 col-md-3 pt-4 ">
                            <button onClick={()=>scrollInto4()} className="container btn btn-dark">
                                <p>{
                                    `${Deceased}`
                                }<br/> {
                                    `${
                                        DeltaIncrease[3]
                                    }`
                                }
                                    <i className={
                                        `fa fa-lg ${
                                            fontawesomeFlag[3]
                                        }`
                                    }></i>
                                </p>
                                <small>Deceased</small>
                            </button>
                        </div>
                    </div>

                    <small className="text-muted">
                        {
                        `Last updated: ${
                            props.cases.lastOriginUpdate
                        }`
                    }</small>
                    <br/>
                    <br/>
                    <div className="slider">
                        <div className="slides">
                            <div id="btnCompute">
                        <Button color="light"
                        onClick={
                            () => {
                                formGraph()
                            }
                    }>Compute Graphs</Button></div>
                            <div id="slide-1">
                            <Line data={chartData}/>
                            </div>
                            <div id="slide-2">
                            <Line data={chartDataActive}/>
                            </div>
                            <div id="slide-3">
                            <Line data={chartDataRecovered}/>
                            </div>
                            <div id="slide-4">
                            <Line data={chartDataDeceased}/>
                            </div>
                            <div id="slide-5">
                            <Line data={chartDataTests}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
