import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCases } from "../redux/ActionCreaters";

const mapStateToProps = state =>{
    return {
       cases: state.cases
     } 
   }
const mapDispatchToProps=(dispatch)=>({
    fetchCases:()=>dispatch(fetchCases())
   });

class Main extends Component {

    componentDidMount(){
        this.props.fetchCases();
    }

    render() {
        const HomePage=()=>{
            return(
                <Home cases={this.props.cases.cases}
                isLoading={this.props.cases.isLoading}
                errMess={this.props.cases.errMess}/>
            )
        }

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    {/* <Route exact path="/indian-states" component={()=><RenderIndianStates/>}/>  */}
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
                
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
