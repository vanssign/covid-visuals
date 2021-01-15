import React, {useState} from 'react';
import {Line, Bar, Pie} from 'react-chartjs-2';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Statewise(props) {
    const {className} = props;
    const [modal, setModal] = useState(true);
    const[SelectedState,UpdateState]=useState('None');
    var [DeltaIncrease,UpdateDeltaIncrease]=useState([]);
    var [IncreaseFlag,UpdateIncreaseFlag]=useState([]);
    var [fontawesomeFlag,UpdatefontawesomeFlag]=useState([]);
    var [Total,UpdateTotal]=useState(' ');
    var [Deceased,UpdateDeceased]=useState(' ');
    var [Recovered,UpdateRecovered]=useState(' ');
    var [Active,UpdateActive]=useState(' ');

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

    const toggle = () => setModal(!modal);
    if (props.isLoading) {
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
    } else if (props.cases != null) {
        var labelArray=[];
        var str=[]
        for(let i=0;i<props.cases.data.length;i++){
         str[i] =`${props.cases.data[i].day}`;
         var res=str[i].split("-");
         labelArray[i]=res[2]+'/'+res[1];
  
        }

        var x;
        var totalcases=[];
        var deceasedcases=[];
        var recoveredcases=[];
        var activecases=[];
       
        var lastindex=props.cases.data.length-1;

        
       
              
      

var radiobtns = document.getElementsByName('indianstate'); 
function changeState(){
    for(let i = 0; i < radiobtns.length; i++) { 
        if(radiobtns[i].checked===true){
        UpdateState(`${radiobtns[i].value}`)}
    }
}
  function formGraph(){
    console.log(SelectedState)
    for(let i=0;i<props.cases.data.length;i++){
        x=-1;
        for(let j=0;j<props.cases.data[i].regional.length;j++){
            if(props.cases.data[i].regional[j].loc===SelectedState){
              x= j
              break;
            }
        }
        
        if(x===-1){
            totalcases[i]=0;
            deceasedcases[i]=0;
            recoveredcases[i]=0;
            activecases[i]=0

        }
        else{
        totalcases[i]= props.cases.data[i].regional[x].totalConfirmed;
        deceasedcases[i]= props.cases.data[i].regional[x].deaths;
        recoveredcases[i]= props.cases.data[i].regional[x].discharged;
        activecases[i]= totalcases[i]-recoveredcases[i]-deceasedcases[i]
    
    }
    }
        UpdateTotal(totalcases[lastindex]);
        UpdateActive(activecases[lastindex]);
        UpdateRecovered(recoveredcases[lastindex]);
        UpdateDeceased(deceasedcases[lastindex]);
        
        DeltaIncrease[0]=Math.abs(totalcases[lastindex]-totalcases[lastindex-1]);
        DeltaIncrease[1]=Math.abs(activecases[lastindex]-activecases[lastindex-1])
        DeltaIncrease[2]=Math.abs(recoveredcases[lastindex]-recoveredcases[lastindex-1])
        DeltaIncrease[3]=Math.abs(deceasedcases[lastindex]-deceasedcases[lastindex-1])

        
        if(totalcases[lastindex]<totalcases[lastindex-1]){
            IncreaseFlag[0]=false
        }
        else IncreaseFlag[0]=true;
        if(activecases[lastindex]<activecases[lastindex-1]){
            IncreaseFlag[1]=false
        }
        else IncreaseFlag[1]=true;
        if(recoveredcases[lastindex]<recoveredcases[lastindex-1]){
            IncreaseFlag[2]=false
        }
        else IncreaseFlag[2]=true;
        if(deceasedcases[lastindex]<deceasedcases[lastindex-1]){
            IncreaseFlag[3]=false
        }
        else IncreaseFlag[3]=true;

        
        for(let i=0;i<4;i++){
            if(IncreaseFlag[i]){
                fontawesomeFlag[i]='fa-arrow-up'
            }
            else fontawesomeFlag[i]='fa-arrow-down'
        }

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
              setModal(!modal);
            
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
        <BreadcrumbItem className="text-info"><Link to="/home">India</Link></BreadcrumbItem>
        <BreadcrumbItem active>{`${SelectedState}`} <button className="btn btn-link text-info"
                    onClick={toggle}><i className="fa fa-edit"></i></button></BreadcrumbItem>
      </Breadcrumb>
            <div className="container">
                <br/>
                <Modal isOpen={modal}
                    toggle={toggle}
                    className={className}>
                        <ModalHeader>
                        <small>Select a radio button, Press Select State and then Compute Data</small>
                        <br/>
                    <Button className="mr-2" color="light"
                             onClick={()=>{changeState()}} >Select State</Button>
                    <Button color="light"
                             onClick={()=>{formGraph()}} >Compute Data</Button>
                             <br/>
        <small>Selected: <span className="text-info font-weight-bolder">{`${SelectedState}`}</span></small>
                        </ModalHeader>
                    <ModalBody>
                      {props.cases.data[lastindex].regional.map((region,index)=>(
                          <>
                          <input type="radio" id={`region${index}`} name="indianstate" value={region.loc}/>
                      <label for={`region${index}`}>{region.loc}</label><br/>
                      </>
                      ))

                      }
                        
                        {/* <input type="radio" id="delhi" name="indianstate" value="Delhi"/>
                        <label for="andaman">Delhi</label><br/> */}
                    </ModalBody>
                    <ModalFooter>
                      
                        
                        {' '} </ModalFooter>
                </Modal>
                <p className="lead"><span className="font-weight-bolder">Latest Stats:</span> {`${SelectedState}`}</p>
                <div className="row">
                    <div className="col-6 col-md-3 pt-4">
                    <button className="container btn btn-primary" onClick={()=>scrollInto1()}>
                        <p>{`${Total}`}<br/>
                        {`${DeltaIncrease[0]}`} <i className={`fa fa-lg ${fontawesomeFlag[0]}`}></i></p>
                        <small>Total</small>
                    </button>
                    </div>
                    <div className="col-6 col-md-3 pt-4">
                    <button className="container btn btn-danger" onClick={()=>scrollInto2()}>
                    <p>{`${Active}`}<br/>
                    {`${DeltaIncrease[1]}`} <i className={`fa fa-lg ${fontawesomeFlag[1]}`}></i></p>
                        <small>Active</small>
                    </button>
                    </div>
                    <div className="col-6 col-md-3 pt-4">
                    <button className="container btn btn-success" onClick={()=>scrollInto3()}>
                    <p>{`${Recovered}`} <br/>
                    {`${DeltaIncrease[2]}`} <i className={`fa fa-lg ${fontawesomeFlag[2]}`}></i></p>
                        <small>Recovered</small>
                    </button>
                    </div>
                    <div className="col-6 col-md-3 pt-4">
                    <button className="container btn btn-dark" onClick={()=>scrollInto4()}>
                    <p>{`${Deceased}`}<br/>
                    {`${DeltaIncrease[3]}`} <i className={`fa fa-lg ${fontawesomeFlag[3]}`}></i></p>
                        <small>Deceased</small>
                    </button>
                    </div>
                </div>
               
        <small className="text-muted">{`Last updated: ${props.cases.lastOriginUpdate}`}</small><br/>
        <br/>
        <div className="slider">
                        <div className="slides">
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
                        </div>
                    </div>

            </div>
            </>
        )
    }
}
