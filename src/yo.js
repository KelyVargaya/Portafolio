import React, { Component } from 'react';
import './yo.css';
import {Button, FormGroup, FormControl,Nav,Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    NavLink,
   
} from 'react-router-dom'

const Yo = ({ }) => {
    return (
        <div id="yo" >
            
         <Grid fluid>
                <Row >
                    <Col mdOffset={6} md={6} xs={6} > 
                    <div className="caja">
                    <h3>KELY VARGAYA</h3>
                    <h4>DEVELOPER FRON-END JUNIOR </h4>
                    <p>Soy programadora web por
                        profesión y por convicción. Estoy tremendamente comprometida
                        con el trabajo que hago. 
                    </p>
                    <p>
                        Estoy fascinado con las tecnologías web y aplicativos moviles por
                        las increíbles innovaciones que producen.

                        Estudie el Laboratoria y estoy lista para empezar cualquier reto.</p>
                     
                     <NavLink to="/about"><button className="boton1">SIGUE EXPLORANDO</button></NavLink></div>
                    
               
                    </Col>
                </Row>
            </Grid>
        
        </div>
    );

}

export default Yo;