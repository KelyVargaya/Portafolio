import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl,Glyphicon,ProgressBar, Glyphico, Navbar,NavItem, Nav, Grid, Row, Col } from 'react-bootstrap';
import foto from './img/ofi.jpg';
import foto1 from './img/black1.jpg';
import logo from "./img/logi.png";
import linea from "./img/linea2.png";
import hackhaton from "./img/premios1.png"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import proyecto1 from "./img/web/proyecto1.png";
import proyecto2 from "./img/web/user-testing-360.jpg";
import proyecto3 from "./img/web/sprint.jpg";
import proyecto4 from "./img/web/coder.jpg";
import proyecto5 from "./img/web/primes.jpg";
import proyecto6 from "./img/web/comunidad-sostenible.jpg";
import cv from "./docs/Kely_Vargaya-cv.pdf";

const Home = ({  }) => {
	return (    
		<div id="home">
           <div class="topleft ">
    <a href="#"><img src={logo} alt=""/></a>
            </div>
            <div id="mySidenav" class="sidenav">
            <a href="#" id="about">Inicio</a>
            <a href="#" id="blog">Sobre Mi</a>
            <a href="#" id="projects">Proyectos</a>
            <a href="#" id="contact">Contact</a>
            </div>
            <div className="contenido">
                <div id="titulo">
                    <div className="h">
                    <h1>Kely Vargaya</h1>
 
                    </div>
                    <div className="subtitulo">
                    <h3>Developer Front-End Junior </h3>
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
                         <button id="curriculum" class="btn btn-cv center-block wow bounceInRight"><a class="a-none-decoration text-white cv" href={cv} target="_blanck">Descarga mi CV</a></button>
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
                            <h3 className="visible-xs mediano">RECONOCIMIENTO</h3>
                            <img className="hackhaton" src={hackhaton} alt=""/>
                            </Col>
                            <Col md={6}>
                            <h3 className="hidden-xs">RECONOCIMIENTOS</h3>
                            <p className="parrafo">Ganadores de la Hackhaton Perú Sin Anemia organizada por el MIDIS con el proyecto <a className="parrafo" href="https://melanieoc.github.io/hackathon/">HACKNEMIA</a> </p>
                            </Col>
                        </div>
                        </Col>
                     </Row>
               </Grid>

               
            </div>                
     {/* SKILLS */}
     <Grid id="skills"> 
     <Row>
        <Col mdOffset={6} lgOffset={6} md={6} lg={6} xs={12}>
        <h1>HABILIDADES</h1>
        <ProgressBar className="skillbar clearfix " >
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`Javascript`}/>
            <ProgressBar className="success" now={56} key={1} />
             <div class="skill-bar-percent"><strong>Intermedio</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " >
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`React-Redux`}/>
            <ProgressBar className="success1" now={46} key={2} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix ">
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`jQuery`}/>
            <ProgressBar className="success3" now={40} key={3} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " >
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`Firebase`}/>
            <ProgressBar className="success4" now={33} key={4} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        </Col>
        
         <Col md={6} lg={6} xs={12}>
        <ProgressBar className="skillbar clearfix " >
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`HTML`}/>
            <ProgressBar className="success4" now={56} key={1} />
             <div class="skill-bar-percent"><strong>Intermedio</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " >
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`CSS`}/>
            <ProgressBar className="success3" now={56} key={2} />
            <div class="skill-bar-percent"><strong>Intermedio</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix " >
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`BOOTSTRAP`}/>
            <ProgressBar className="success2" now={50} key={3} />
            <div class="skill-bar-percent"><strong>Intermedio</strong></div>
        </ProgressBar>
        <ProgressBar className="skillbar clearfix ">
            <ProgressBar className="skillbar-title" bsStyle="warning" now={20} key={1} label={`PHOTOSHOP`}/>
            <ProgressBar className="success" now={42} key={4} />
            <div class="skill-bar-percent"><strong>Básico</strong></div>
        </ProgressBar>
        </Col>
    </Row>
</Grid>
           <Grid>
        <section id="portafolio">
        <h1>PROYECTOS WEB</h1>
        <div className="row pt-2">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <a name="proyectos" />
            <h2 className="text-azul text-center wow slideInUp">PROYECTOS WEB</h2>
            
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <a href="https://melanieoc.github.io/hackathon/" target="_blanck">
              <img className="img-responsive img-thumbnail wow zoomIn" src={proyecto1} alt="sitio-web-kean" />
              <div className="divFondo text-center center-block">
                <h3 className="title-port">HACKNEMIA</h3>
                <p>Proyecto creado para ayuda</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 margin-sm-xs">
            <a href="https://kelyvargaya.github.io/Trello-Redux/" target="_blanck">
              <img className="img-responsive img-thumbnail wow zoomIn" src={proyecto2} alt="sitio-web-testing-360" />
              <div className="divFondo text-center center-block">
                <h3>Trello Redux</h3>
                <p>Organizador de tareas</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 margin-sm-xs">
            <a href=" https://KelyVargaya.github.io/Game-Laberinto/" target="_blanck">
              <img className="img-responsive img-thumbnail wow zoomIn" src={proyecto3} alt="sitio-web-sprint" />
              <div className="divFondo text-center center-block">
                <h3>LABERINTO GAME</h3>
                <p>Sitio construido para poder jugar Laberinto con MarioBross.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <a href="https://KelyVargaya.github.io/Save-The-Koala-2/" target="_blanck">
              <img className="img-responsive img-thumbnail wow zoomIn" src={proyecto4} alt="portafolio Coder" />
              <div className="divFondo text-center center-block">
                <h3>Save The Koala</h3>
                <p>Landing Page sobre koalas</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 margin-sm-xs">
            <a href="https://KelyVargaya.github.io/Memory-Game/" target="_blanck">
              <img className="img-responsive img-thumbnail wow zoomIn" src={proyecto5} alt="sitio primes" />
              <div className="divFondo text-center center-block">
                <h3>Memory Game</h3>
                <p>El juego de Memoria desarrollado con Jquery</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 margin-sm-xs">
            <a href="http://www.colca360.com/" target="_blanck">
              <img className="img-responsive img-thumbnail wow zoomIn" src={proyecto6} alt="sitio comunidad sostenible" />
              <div className="divFondo text-center center-block">
                <h3>COLCA 360</h3>
                <p>Sitio web elaborado para promocionar lugares turisticos del valle del colca con fotografias 360°</p>
              </div>
            </a>
          </div>
        </div>
      </section>
           </Grid>



           
            <section id="contacto">
                <Row>
                    <Col  md={12} lg={12} xs={12} className="divcontacto">
                        <a name="Contacto" />
                        <h2 className="text-white text-center ">CONTACTO</h2>
                        <p className="text-white text-center contactame">Si te gusto mi trabajo contáctame y trabajemos juntos. <br />
                            </p> 
                        <ul className="text-center cont-icon pt-2 ">
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
                        </Col>
                
            </Row>
             </section>
        </div>
	);
}

export default Home;