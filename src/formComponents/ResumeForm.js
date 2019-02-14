import React, { Component } from 'react';
import PersonalInfoForm from './PersonalInfoForm'
import SkillsForm from './SkillsForm'
import WorkHistoryForm from './WorkHistoryForm'
import EducationForm from './EducationForm'

class ResumeForm extends Component {

    constructor(){
        super()
        this.state = {
           resume: {}
         
        }
    }

    // addNewResume = () => {
    //     fetch('http://localhost:3000/resumes', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //     }) 
    //     .then(res => res.json())
    //     .then(resume => this.props.addNewResume(resume))
    // }


    componentDidMount(){
        fetch(`http://localhost:3000/resumes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(resume => {
            this.setState({
                resume: resume
            })
        })
    }

    // handleSubmit = (event) => {
    //     this.setState({
    //         personal_info: event.target.personal_info.value,
    //         work_history: event.target.work_history.value,
    //         education: event.target.education.value,
    //         skills: event.target.skills.value,

    //     }, () => this.addNewResume())
    // }

    getInfo = section => (value) => {
        console.log('heyyyyyy', value)
        this.setState({
            resume: {
                ...this.state.resume,
                [section]: value
            }
        })
     }

    
    
    render() {
        // console.log(this.state.resume)
        return (
            <div>
               <PersonalInfoForm resume={this.state.resume.personal_info} getInfo={this.getInfo('personal_info')} />
               <WorkHistoryForm resume={this.state.resume.work_history} getInfo={this.getInfo('work_experience')}/>
               <EducationForm resume={this.state.resume.educations} getInfo={this.getInfo('educations')}/>
               <SkillsForm resume={this.state.resume.skills} getInfo={this.getInfo('skills')} />
            
            </div>
        )
    }
}

export default ResumeForm;