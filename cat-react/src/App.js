import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CatAdd from './Components/CatAdd'
import logo from './logo.svg';
import './App.css';
import CatIndex from './Components/CatIndex'
import { updateStoreCat } from './CatActions'


class App extends Component {
  constructor(props){
    super(props)

    updateStoreCat()

    }

  render() {
    return (
  <div className='row'>
    <div className='.col-md-6 .col-md-offset-3'>
      <div className='panel-default'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Cat World!</h2>
        <div className='panel'>
          <div className='container'>
          <Router>
            <div className='center'>
            <Route exact path="/" component={CatIndex} />
            <Route exact path="/add" component={CatAdd} />
            </div>
          </Router>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
    }
  }

export default App
