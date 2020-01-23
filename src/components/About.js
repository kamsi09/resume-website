import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>Email : <a href="mailto:sam.oduche@ttu.edu">{resumeData.email}</a></span>
                           <br></br>
                           <span>
                              Location : {resumeData.address}
                           </span>
                           <br></br>
                           <span><u><a href="https://github.com/kamsi09">{resumeData.website}</a></u></span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}