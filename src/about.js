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
                    
                    <div className="yo">
                            YO</div>
                  
                        
                   
                    </Col>
                    <Col  lg={6} xs={6}>
                    
                    <div className="proyecto">
                            Proyectos</div>
                   
                        
                   
                    </Col>
                </Row>
            </Grid>

        
        </div>
    );

}

export default About;