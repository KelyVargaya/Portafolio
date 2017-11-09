import React, { Component } from 'react';
import './about.css';
import {Button, FormGroup, FormControl,Nav,Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import pequeño from './img/logoo.png';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    NavLink,
   
} from 'react-router-dom'

const About = ({ }) => {
    return (
        <div id="about">
            <Grid fluid>
                <Row >
                    <Col  lg={6} xs={6}>
                    <NavLink to={"/yo"}>
                    <div className="yo">
                            YO</div>
                    Iniciar</NavLink> 
                        
                   
                    </Col>
                    <Col lg={6} xs={6}> 
                    <h1>Mis proyectos</h1>
                         
                    </Col>
                </Row>
            </Grid>

        
        </div>
    );

}

export default About;