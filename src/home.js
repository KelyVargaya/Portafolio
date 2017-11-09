import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl,Glyphicon, Grid, Row, Col } from 'react-bootstrap';
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
			
                <Grid fluid>
                <Row >
                    <Col mdOffset={6} md={6} xs={6} > 
                    <div className="caja">
                    <h3>HOLA,YO SOY KELY</h3>
                    <h4>DEVELOPER FRON-END JUNIOR </h4>
                    <h4>Y ESTA ES MI PASION POR LA TECNOLOGIA Y INNOVACION</h4>
                     
                     <NavLink to="/about"><button className="boton">EMPECEMOS</button></NavLink></div>
                    
               
                    </Col>
                </Row>
            </Grid>

			
		</div>
	);
}

export default SingIn;