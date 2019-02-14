import React, {Component} from 'react';
import PersonalInfoForm from './PersonalInfoForm'
import EducationForm from "./EducationForm"
import WorkHistoryForm from "./WorkHistoryForm"
import SkillsForm from "./SkillsForm"


class ResumeForm extends Component {
  
  constructor(props) {
    super();
    
    this.state = {
      resume: null
    }
  }
  
  componentDidMount() {
    // console.log(this.props.match.params.id)
    fetch('http://localhost:3000/resumes/1')
        .then(res => res.json())
        .then(resume => this.setState({resume}))
  }
  
  
  render() {
    console.log(this.state.props)
    return (
        <div>
          <PersonalInfoForm resume={this.state.resume} />
          <EducationForm resume={this.state.resume} />
          <WorkHistoryForm resume={this.state.resume} />
          <SkillsForm resume={this.state.resume} />
        </div>
    );
  }
}


export default ResumeForm;
