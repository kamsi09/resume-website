import React, { Component } from 'react';
import Pdf from '../resume.pdf';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <li>
                        {item.Achievements[0].firstAchievement}
                      </li>
                      <li>
                        {item.Achievements[0].secondAchievement}
                      </li>
                      <li>
                        {item.Achievements[0].thirdAchievement}
                      </li>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <li>
                        {item.Achievements[0].firstAchievement}
                      </li>
                      <li>
                        {item.Achievements[0].secondAchievement}
                      </li>
                      <li>
                        {item.Achievements[0].thirdAchievement}
                      </li>
                      <br />
                    </div>
                  </div>

                )
              })
            }
            <a style={{ color: '#707070', fontFamily: 'opensans-bold, sans-serif', fontSize: '17px' }}
              href={Pdf} target="_blank">
              <u>Resume (PDF)</u>
            </a>
          </div>

        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">

              <ul className="skills">
                <li>
                  <span className={`bar-expand c`}>
                  </span><em>C/C++</em>
                </li>
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
                <li>
                  <span className={`bar-expand sass`}>
                  </span><em>S(CSS)</em>
                </li>

              </ul>

            </div>

            <p>
              <strong><u>Learning:</u></strong>{resumeData.skillsDescription[0].learning}
            </p>

          </div>

        </div>

      </section>
    );
  }
}