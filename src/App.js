import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      // <div>
      // <img id="splash" src="images/icon.png" />
      //   <div className="App"id="wrapper1" class="one-edge-shadow">
      //   <Header resumeData={resumeData}/>
      //   <About resumeData={resumeData}/>
      //   <Resume resumeData={resumeData}/>
      //   <Portfolio resumeData={resumeData}/>
      //   <ContactUs resumeData={resumeData}/>
      //   <Footer resumeData={resumeData}/>
      // </div>
      // </div>
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;