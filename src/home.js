import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import logo from './img/fotoof1.png';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    Nav,
    NavLink
} from 'react-router-dom'

const SingIn = ({  }) => {
	return (
		<div id="home">
			<center>
               
          <NavLink to="/about"><button className="boton">SING IN</button></NavLink>

            </center>
			
		</div>
	);
}

export default SingIn;