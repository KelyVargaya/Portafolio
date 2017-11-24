import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch,Redirect,Nav,NavLink} from 'react-router-dom'
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';
import Home from './home.js';
import About from './about.js'
import Yo from './yo.js'
import Proyecto from './proyectos.js'

const App = ({ trello }) => {
  return (
    <div>
      
        <Home/>
    
    </div>
  );
}

const mapToProps = ({trello}) => ({trello});
export default connect(mapToProps)(App);
