import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row text-center">
            <div className="banner-text">
               <h3 style={{color:'#F06000', fontFamily:'opensans-bold, sans-serif', fontSize: '15px'}} className="responsive-headline">What's Next?</h3>
               <br/>
               <h4 style={{color:'#fff', fontFamily:'opensans-bold, sans-serif', fontSize: '60px'}} >Get In Touch</h4>
               <br/><br/>
               <p style={{color:'#707070', fontFamily:'opensans-bold, sans-serif', fontSize: '17px'}} >
                I'm currently a student looking for career, internship, and freelance opportunities 
                so my inbox is always open! Whether for a potential project or just to say hi, 
                I'll try my best to answer your email!
               </p>
               <br/>
               <a style={{fontFamily:'opensans-bold, sans-serif', fontSize: '30px'}} href="mailto:sam.oduche@ttu.edu">Send A Message</a>

            </div>
         </div> 
        </section>
        );
  }
}