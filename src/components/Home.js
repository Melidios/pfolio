import React, { Component } from 'react';
import Navbar from './Navbar';
import Bio from './Bio';
import Projects from './Projects';
import Footer from './Footer';
import Particles from 'react-particles-js';
import '@material-ui/core/colors';

const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: 'none',
    'backgroundImage': 'url("")',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundPosition': '50% 50%',
}

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
            <div style={{background: 'linear-gradient(35deg, #cfd8dc 30%, #eceff1 90%)', display: 'block'}}>
                <Particles
                        style={style}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 380,
                                    "density": {
                                        "enable": true,
                                        "value_area": 2100
                                    }
                                },
                                "color": {
                                    "value": "#607d8b"
                                },
                                "shape": {
                                    "type": "star",
                                    "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                    },
                                    "polygon": {
                                    "nb_sides": 5
                                    },
                                
                                },
                                "opacity": {
                                    "value": 0.5,
                                    "random": false,
                                    "anim": {
                                    "enable": false,
                                    "speed": 5,
                                    "opacity_min": 0.1,
                                    "sync": false
                                    }
                                },
                                "size": {
                                    "value": 4,
                                    "random": true,
                                    "anim": {
                                    "enable": false,
                                    "speed": 80,
                                    "size_min": 0.1,
                                    "sync": false
                                    }
                                }
                            },"line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 10,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                "enable": false,
                                "rotateX": 1200,
                                "rotateY": 2200
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
                                "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                "distance": 140,
                                "line_linked": {
                                    "opacity": 1
                                }
                                },
                                "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 10
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
        </div>    
              <h1 >Welcome to Kseniia Portfolio</h1>
          <Bio  style={{position:'absolute'}}/>
          <Projects />
          <Footer />
      </div>
    );
  }
}

export default Home;