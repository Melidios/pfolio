import React, { Component } from 'react';
import Navbar from './Navbar';
import Bio from './Bio';
import Projects from './Projects';
import Footer from './Footer';
import Particles from 'react-particles-js';
import '@material-ui/core/colors';



class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
            <h1 style={{textAlign:'center', position:'absolute', color:'white', left:'0', right:'0', margin:'0', paddingTop:'3em'}}>Welcome to Kseniia Portfolio</h1>  
                <Particles
                        style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}
                        params={{
                            "particles": {
                              "number": {
                                "value": 450,
                                "density": {
                                  "enable": true,
                                  "value_area": 3000
                                }
                              },
                              "color": {
                                "value": "#ffffff"
                              },
                              "shape": {
                                "type": "circle",
                                "stroke": {
                                  "width": 0,
                                  "color": "#000000"
                                },
                                "polygon": {
                                  "nb_sides": 5
                                },
                                "image": {
                                  "src": "img/github.svg",
                                  "width": 100,
                                  "height": 100
                                }
                              },
                              "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                  "enable": false,
                                  "speed": 1,
                                  "opacity_min": 0.1,
                                  "sync": false
                                }
                              },
                              "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                  "enable": false,
                                  "speed": 40,
                                  "size_min": 0.1,
                                  "sync": false
                                }
                              },
                              "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                              },
                              "move": {
                                "enable": true,
                                "speed": 2,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                  "enable": false,
                                  "rotateX": 1200,
                                  "rotateY": 2400
                                }
                              }
                            },
                            "interactivity": {
                              "detect_on": "canvas",
                              "events": {
                                "onhover": {
                                  "enable": true,
                                  "mode": "grab"
                                },
                                "onclick": {
                                  "enable": true,
                                  "mode": "repulse"
                                },
                                "resize": true
                              },
                              "modes": {
                                "grab": {
                                  "distance": 400,
                                  "line_linked": {
                                    "opacity": 1
                                  }
                                },
                                "bubble": {
                                  "distance": 400,
                                  "size": 40,
                                  "duration": 2,
                                  "opacity": 8,
                                  "speed": 3
                                },
                                "repulse": {
                                  "distance": 200,
                                  "duration": 0.4
                                },
                                "push": {
                                  "particles_nb": 4
                                },
                                "remove": {
                                  "particles_nb": 2
                                }
                              }
                            },
                            "retina_detect": true
                          }}
                        
            />
        <div style={{padding: '0 15px 0 15px'}}>
          <Projects />
          <Bio />
        </div>  
        <Footer />    
      </div>
    );
  }
}

export default Home;