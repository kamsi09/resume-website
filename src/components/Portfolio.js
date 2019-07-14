import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{fontFamily:'sans-serif', fontSize: '20px'}}>Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img  src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div  className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          
                        </div>
                      </div>
                  </div>
                  <p>
                    {item.tools} <br/>
                    Github: <a href={item.gitHubLink} target="_blank"><i className={"fa fa-github"}></i></a>
                    </p>
                  

                </div>
                
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}