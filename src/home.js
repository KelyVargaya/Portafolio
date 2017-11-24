import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl,Glyphicon,ProgressBar, Glyphico, Navbar,NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import foto from './img/ofi.jpg';
import foto1 from './img/black1.jpg';
import logo from "./img/logi.png";
import linea from "./img/linea2.png";
import hackhaton from "./img/premios1.png"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

const Home = ({  }) => {
	return (    
		<div id="home">
            <Navbar fixedTop className="header">
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><img src={logo} alt=""/></a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight className="menu">
                    <NavItem eventKey={1} href="#">	<Glyphicon className="icono" glyph="home" /></NavItem>
                    <NavItem eventKey={2} href="#">	<Glyphicon className="icono" glyph="heart" /></NavItem>
                    <NavItem eventKey={3} href="#">	<Glyphicon className="icono" glyph="signal" /></NavItem>
                    <NavItem eventKey={4} href="#"> <Glyphicon className="icono" glyph="user" /></NavItem>
                    <NavItem eventKey={5} href="#"> <Glyphicon className="icono" glyph="th" /></NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="contenido">
                <div id="titulo">
                    <div className="h">
                    <h1>Kely Vargaya</h1>
 
                    </div>
                    <div className="subtitulo">
                    <h3>Developer fron end</h3>
                     <h4>"Innovacion, creatividad y tecnología."</h4>
                    </div>
                    <div className="triangle"></div>
                </div>

                <Grid className="descripcion">
                    <Row>
                        <Col smOffset={4} mdOffset={4} sm={8} md={8}>
                        
                        <Col className="about" sm={6} md={6}>
                        <h1 className="visible-xs-block mi">Sobre Mi </h1>
                        <p className="parrafo">Hola soy Kely, me encanta diseñar, desarrollar y generar paginas web, así como aplicativos móviles, es por eso que además de ser ingeniera de sistemas me forme, en Laboratoria; reforzando cada aspecto que me gusta y potenciando mis habilidades para alcanzar mis metas y sobre todo enfrentarme a los grandes retos que ofrece el mundo tecnológico. 
                        <p className="parrafo">
                            Y estoy lista para empezar cualquier retos.</p>
                        </p>
                        </Col>
                        
                            <Col sm={4} md={6} className="portada">
                            <img className="foto" src={foto1} alt=""/>
                        </Col>
                    </Col>
                    </Row>


                    <Row>
                         <Col sm={8} md={8} >
                        <div id="awards">
                            <Col md={6}>
                            <h3 className="visible-xs mediano">Reconocimientos</h3>
                            <img className="hackhaton" src={hackhaton} alt=""/>
                            </Col>
                            <Col md={6}>
                            <h3 className="hidden-xs">Reconocimientos</h3>
                            <p>Ganadores de la Hackhaton Perú Sin Anemia organizada por el MIDIS con el proyecto <a className="parrafo" href="https://melanieoc.github.io/hackathon/">HACKNEMIA</a> </p>
                            </Col>
                        </div>
                        </Col>
                     </Row>
               </Grid>

               
            </div>                
     {/* SKILLS */}
     <Grid id="skills"> 
     <Row>
        <Col mdOffset={6} lgOffset={4} md={6} lg={6} xs={12}>
        <h1>HABILIDADES</h1>
        <ProgressBar className="skillbar clearfix " label={`Javascript`}>
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`Javascript`}/>
            <ProgressBar className="success" now={56} key={1} />
             <div class="skill-bar-percent"><strong>Intermedio</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " label={`Javascript`}>
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`React-Redux`}/>
            <ProgressBar className="success1" now={46} key={2} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " label={`Javascript`}>
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`jQuery`}/>
            <ProgressBar className="success3" now={40} key={3} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " label={`Javascript`}>
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`Firebase`}/>
            <ProgressBar className="success4" now={33} key={4} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        </Col>
     
    </Row>
</Grid>
           
            <section id="contacto">
                <div className="row pt-2 pb-5">
                        <div className="divcontacto col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <a name="Contacto" />
                        <h2 className="text-white text-center wow slideInUp">CONTACTO</h2>
                        <hr className="hr-white wow slideInUp" />
                        <p className="text-white text-center wow slideInUp">Si te gusto mi trabajo contáctame y trabajemos juntos. <br />
                            <strong className="wow slideInUp">¡HASTA PRONTO!</strong></p> 
                        <ul className="text-center cont-icon pt-2 wow slideInUp">
                            <li>
                            <a href="https://github.com/KelyVargaya" target="_blank">
                                <i class="fa fa-github fa-2x text-white" aria-hidden="true"></i>
                            </a>
                            <p className="text-white redes">/KelyVargaya</p>
                            </li>
                            <li>
                            <a className="a-none-decoration" href="https://mx.linkedin.com/in/kelyvargaya" target="_blank">
                                <i className="fa fa-linkedin fa-2x text-white" aria-hidden="true" />
                            </a>
                            <p className="text-white redes">/KelyVargaya</p>
                            </li>
                            <li>
                            <a href="kelyvargayan@gmail.com" target="_blank">
                                <i className="fa fa-envelope fa-2x text-white" aria-hidden="true" />
                            </a>
                            <p className="text-white redes">kelyvargayan@gmail.com</p>
                            </li>
                            <li>
                            <i className="fa fa-mobile fa-2x text-white" aria-hidden="true" />
                            <p className="text-white redes">(+51) 966 433 672</p>
                            </li>
                        </ul> 
                        </div>
                
            </div>
             </section>
        </div>
	);
}

export default Home;