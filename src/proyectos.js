import React, { Component } from 'react';
import './proyecto.css';
import {Button, FormGroup, FormControl,Nav,Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    NavLink,
   
} from 'react-router-dom'

const Proyectos = ({ }) => {
    return (
        <div id="proyecto" >
            
         <Grid fluid>
                <Row >
                    <Col mdOffset={6} md={6} xs={6} > 
                   
                    <h2>Aqui ira mis proyectos...</h2>
                    
                    </Col>
                </Row>
            </Grid>
        
        </div>
    );

}

export default Proyectos;