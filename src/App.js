import React, { Component } from 'react';
import logo from './logo.svg';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    Nav,
    NavLink
} from 'react-router-dom'

import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';
import Home from './home.js';
import SingUp from './sing_up.js';
import About from './about.js'
import Yo from './yo.js'
import Proyecto from './proyectos.js'

const App = ({ trello }) => {
  return (
    <div>
  
        <BrowserRouter>
        <div>
          <Switch>
            
            <Route exact path="/sing_up" render={() =><SingUp/>}/>
            <Route exact path="/home" render={() =><Home/>}/>
            <Route exact path="/about" render={() =><About/>}/>
            <Route exact path="/yo" render={() =><Yo/>}/>
            <Route exact path="/proyectos" render={() =><Proyecto/>}/>
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

const mapToProps = ({trello}) => ({trello});
export default connect(mapToProps)(App);
