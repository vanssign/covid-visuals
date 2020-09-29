import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigStore} from './redux/ConfigStore';

const store=ConfigStore();

class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <HashRouter>
      <div className="App"> 
         <Main/>
      </div>
      </HashRouter>
      </Provider>
    
    
  );
}
}
export default App;