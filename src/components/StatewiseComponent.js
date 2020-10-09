import React, {useState} from 'react';
import {Line, Bar, Pie} from 'react-chartjs-2';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Statewise(props) {
    const {className} = props;
    const [modal, setModal] = useState(false);
    const[SelectedState,UpdateState]=useState('Null')
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

        
       
              
      

var radiobtns = document.getElementsByName('indianstate'); 
function changeState(){
    for(let i = 0; i < radiobtns.length; i++) { 
        if(radiobtns[i].checked===true){
        UpdateState(`${radiobtns[i].value}`)}
    } 
    setModal(!modal);
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
    
    console.log(totalcases);
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
                <p className="lead">Under Maintenance, check <Link to="/home">Stats of India</Link></p>
                <Button color="secondary"
                    onClick={toggle}>Change State</Button> <p>{`Current State: ${SelectedState}`}</p>
                <Modal isOpen={modal}
                    toggle={toggle}
                    className={className}>
                    <ModalBody>
                        <input type="radio" id="andhrapradesh" name="indianstate" value="Andhra Pradesh"/>
                        <label for="andaman">Andhra Pradesh</label><br/>
                        <input type="radio" id="delhi" name="indianstate" value="Delhi"/>
                        <label for="andaman">Delhi</label><br/>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary"
                             onClick={()=>{changeState()}} >Select State</Button><br/>
                        
                        {' '} </ModalFooter>
                </Modal>
                <Button color="secondary"
                             onClick={()=>{formGraph()}} >Compute Graphs</Button>
                <Line data={chartData}/>
                <br/>
                <Line data={chartDataActive}/>
                <br/>
                <Line data={chartDataRecovered}/>
                <br/>
                <Line data={chartDataDeceased}/>
                <br/>
                <br/>

            </div>
        )
    }
}
