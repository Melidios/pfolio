import React, { Component } from 'react';
import Navbar from './Navbar';
import Bio from './Bio';
import Projects from './Projects';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <h1>Welcome to Kseniia's Portfolio</h1>
          <Bio />
          <Projects />
          <Footer />
      </div>
    );
  }
}

export default Home;