import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import './App.css';

class App extends Component {
  resume;
  
//   state = {
//     users: [];
//   }
//
//   componentDidMount() {
//     fetch("rails server")
//         .then(res => res.json())
//         .then(users => this.setState({users: users.map(user => ({...user, exists: false}))}
// }
  
  exportPDF = () => {
    this.resume.save();
  }
  
  render() {
    
    return (
      <div className="App">
        <div>
          <button onClick={this.exportPDF}>Download</button>
        </div>
        <PDFExport paperSize={'Letter'} fileName="ResuMine.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
          
          <div style={{height: 792, width: 612, padding: 'none', backgroundColor: 'white', boxShadow: '5px 5px 5px black', margin: 'auto',
            overflowX: 'hidden', overflowY: 'show'}} >
  
            <div id="cv" className="instaFade">
              <div className="mainDetails">
                <div id="headshot" className="quickFade">
                  <img src="#" alt="" />
                </div>
      
                <div id="name">
                  <h1 className="quickFade delayTwo">Austin Puckett</h1>
                  <h2 className="quickFade delayThree">Web Developer</h2>
                </div>
      
                <div id="contactDetails" className="quickFade delayFour">
                  <ul>
                    <li>
                      e: <a href="mailto:puckett_austin@yahoo.com" target="_blank" rel="noopener noreferrer">puckett_austin@yahoo.com</a>
                    </li>
                    <li>w: <a href="http://www.github.com/APuck003">Github</a></li>
                    <li>m: 972-352-8356</li>
                  </ul>
                </div>
                <div className="clear">
                
                </div>
              </div>
    
              <div id="mainArea" className="quickFade delayFive">
                <section>
                  <article>
                    <div className="sectionTitle">
                      <h1>Bio</h1>
                    </div>
          
                    <div className="sectionContent">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </div>
                  </article>
                  <div className="clear">
                  
                  </div>
                </section>
      
      
                <section>
                  <div className="sectionTitle">
                    <h1>Work Experience</h1>
                  </div>
        
                  <div className="sectionContent">
                    <article>
                      <h2>Job Title at Company</h2>
                      <p className="subDetails">April 2011 - Present</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </article>
          
                    <article>
                      <h2>Job Title at Company</h2>
                      <p className="subDetails">Janruary 2007 - March 2011</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </article>
          
                    <article>
                      <h2>Job Title at Company</h2>
                      <p className="subDetails">October 2004 - December 2006</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </article>
                  </div>
                  <div className="clear">
                  
                  </div>
                </section>
      
      
                <section>
                  <div className="sectionTitle">
                    <h1>Skills</h1>
                  </div>
        
                  <div className="sectionContent">
                    <ul className="keySkills">
                      <li>Skill</li>
                      <li>Skill</li>
                      <li>Skill</li>
                      <li>Skill</li>
                      <li>Skill</li>
                      <li>Skill</li>
                      <li>Skill</li>
                      <li>Skill</li>
                    </ul>
                  </div>
                  <div className="clear">
                  
                  </div>
                </section>
      
      
                <section>
                  <div className="sectionTitle">
                    <h1>Education</h1>
                  </div>
        
                  <div className="sectionContent">
                    <article>
                      <h2>College/University</h2>
                      <p className="subDetails">Qualification</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                    </article>
          
                    <article>
                      <h2>College/University</h2>
                      <p className="subDetails">Qualification</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                    </article>
                  </div>
                  <div className="clear">
                  
                  </div>
                </section>
    
              </div>
            </div>
            
          </div>
          
          
        </PDFExport>
      </div>
    );
  }
}

export default App;
