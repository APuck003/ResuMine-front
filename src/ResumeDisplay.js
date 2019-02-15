import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf'
// import ResumeForm from "./formComponents/ResumeForm"
// import ResumeForm from "./formComponents/ResumeForm"

class ResumeDisplay extends Component {
  
    state = {
      resume: null
    }
   
    exportPDF = () => {
      this.resume.save();
    }
  
  componentDidMount() {
   this.fetchData()
  }

  fetchData = () => {
    fetch(`http://localhost:3000/resumes/${this.props.match.params.id}`)
    .then(resume => resume.json())
    .then(resume => this.setState({resume}))
  }


    
    
    render() {
      console.log(this.state.resume)
      
      // let schoolInfo = this.state.resume.educations.map(school => {
      //   return <p>{school.school}</p>
      // })
  
      if(!this.state.resume) return <div>Loading...</div>
      // console.log(this.state.resume)
      
      // Personal Info elements
      let name = this.state.resume.personal_info.name
      let email = this.state.resume.personal_info.email
      let phone = this.state.resume.personal_info.phone
      let title = this.state.resume.personal_info.title
      let bio = this.state.resume.personal_info.bio
      
      // Education Info elements
      let school = this.state.resume.educations[0].school
      let years_attended = this.state.resume.educations[0].years_attended
      let major = this.state.resume.educations[0].major
      let degreeOrNotDegree = this.state.resume.educations[0].degree
      
      // Skills Info elements
      let description = this.state.resume.skills[0].description
      
      // Work Info Elements
      let company = this.state.resume.work_experiences[0].company
      let position = this.state.resume.work_experiences[0].position
      let years = this.state.resume.work_experiences[0].years
      let responsibilities = this.state.resume.work_experiences[0].responsibilities
      
      
      return (
        
        <div className="App">
         <h1>Welcome to ResuMine!</h1>
         {this.fetchData()}
          <div>
            <button onClick={this.exportPDF}>Download</button>
          </div>
          <PDFExport paperSize={'Letter'} fileName="ResuMine.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
            
            <div style={{height: 792, width: 612, padding: 'none', backgroundColor: 'white', boxShadow: '5px 5px 5px black', margin: 'auto',
              overflowX: 'hidden', overflowY: 'hidden'}} >
  
                <div id="header">
                  <div className="left">
                    <div className="stuff">
                      <br/>
                        <h1>{name}</h1>
                        <h2>{title}</h2>
                        <hr/>
                        <p>{bio}</p>
                        
                        <br/>
                          <p className="head">Work History</p>
                          <ul>
                            <li>{company}</li>
                            <li>{position}</li>
                            <li>{years}</li>
                            <li>{responsibilities}</li>
                          </ul>
                          
                          <p className="head">Education</p>
                          <ul>
                            <li>{school}</li>
                            <li>{major}</li>
                            <li>{years_attended}</li>
                            <li>{degreeOrNotDegree}</li>
                          </ul>
        
                          <p className="head">Skills</p>
                          <ul>
                            <li>{description}</li>
                          </ul>
                          
                    </div>
                    
                    <div className="right">
                      <div id="footer">
                        <ul>
                          <li>{phone}</li>
                          <li>{email}</li>
                        </ul>
                      </div>
                    </div>
              </div>
          </div>
            </div>

            
          </PDFExport>
        </div>
      );
    }
  }
  
  
  
  export default ResumeDisplay;





















// import React, { Component } from 'react';
// import { PDFExport } from '@progress/kendo-react-pdf'
// import ResumeForm from './formComponents/ResumeForm'

// class ResumeDisplay extends Component {

//   getData = () => {
//     fetch(`http://localhost:3000/resumes/${this.props.id}`)
//       .then(res => res.json())
//       .then(resume => this.state.resume)
//   }

  
//     exportPDF = () => {
//       this.resume.save();
//     }
    
//     render() {
      
//       return (
        
//         <div className="App">
//          <h1>Welcome to ResuMine!</h1>
//           <div>
//             <button onClick={this.exportPDF}>Download</button>
//           </div>
//           <PDFExport paperSize={'Letter'} fileName="{user.name}.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
            
//             <div style={{height: 792, width: 612, padding: 'none', backgroundColor: 'white', boxShadow: '5px 5px 5px black', margin: 'auto',
//               overflowX: 'hidden', overflowY: 'hidden'}} >
              
      
              
//             </div>
         

            
//           </PDFExport>
//         </div>
//       );
//     }
//   }
  
  
  
//   export default ResumeDisplay;