import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header resumeData={resumeData}/>
          <About resumeData={resumeData}/>
          <Resume resumeData={resumeData}/>
          <Portfolio resumeData={resumeData}/>
          <ContactUs resumeData={resumeData}/>
          <Footer resumeData={resumeData}/>
        </div>
      </Router>
    );
  }
}

export default App;