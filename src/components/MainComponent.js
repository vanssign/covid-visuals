import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCases,fetchTests } from "../redux/ActionCreaters";
import Statewise from './StatewiseComponent';


const mapStateToProps = state =>{
    return {
       cases: state.cases,
       tests:state.tests
     } 
   }
const mapDispatchToProps=(dispatch)=>({
    fetchCases:()=>dispatch(fetchCases()),
    fetchTests:()=>dispatch(fetchTests())
   });

class Main extends Component {

    componentDidMount(){
        this.props.fetchCases();
        this.props.fetchTests();
    }

    render() {
        const HomePage=()=>{
            return(
                <Home cases={this.props.cases.cases}
                isLoading={this.props.cases.isLoading}
                errMess={this.props.cases.errMess}
                tests={this.props.tests.tests}
                testsisLoading={this.props.tests.isLoading}
                testserrMess={this.props.tests.errMess}
                />
            )
        }
        const StatewisePage=()=>{
            return(
                <Statewise cases={this.props.cases.cases}
                isLoading={this.props.cases.isLoading}
                errMess={this.props.cases.errMess}/>
            )
        }

        return (
            <div>
                <Header/>
                <Switch>
           
                    <Route exact path="/home" component={HomePage}/>
                    <Route exact path="/state-wise" component={StatewisePage}/>
                    <Route exact path="/about" component={()=><About/>}/>
                  
                    {/* <Route exact path="/indian-states" component={()=><RenderIndianStates/>}/>  */}
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
                
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
