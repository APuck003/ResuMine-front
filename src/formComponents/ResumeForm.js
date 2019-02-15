import React, { Component } from 'react';
import PersonalInfoForm from './PersonalInfoForm'
import SkillsForm from './SkillsForm'
import WorkHistoryForm from './WorkHistoryForm'
import EducationForm from './EducationForm'

class ResumeForm extends Component {

    constructor(){
        super()
        this.state = {
           resume: false
         
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


    hasOne  = section => (value) => {
        // console.log('heyyyyyy', value)
        this.setState({
            resume: {
                ...this.state.resume,
                [section]: value
            }
        })
     }

    hasMany = section => (value) => {
        // console.log('heyyyyyy', value)
        this.setState({
            resume: {
                ...this.state.resume,
                [section]: [ value ]
            }
        })
     }

     patchData = () => {
         const { user_id, educations, personal_info, work_experiences, skills } = this.state.resume
        fetch(`http://localhost:3000/resumes/${this.props.match.params.id}`, {
            method: 'PATCH',
        
            headers: {
                'Content-Type':'application/json'
            },
        
            body: JSON.stringify({
                user_id,
                educations_attributes: educations,
                personal_info_attributes: personal_info,
                work_experiences_attributes: work_experiences,
                skills_attributes: skills
            })
        })
        .then(resume => resume.json())
     }
    
    
    render() {
        if(!this.state.resume) return <div>Loading...</div>
         console.log(this.state.resume)
        return (
            <div>
                <h1>Create Your Resume!</h1>
               <PersonalInfoForm resume={this.state.resume.personal_info} getInfo={this.hasOne('personal_info')} />
               <WorkHistoryForm resume={this.state.resume.work_experiences[0]} getInfo={this.hasMany('work_experience')}/>
               <EducationForm resume={this.state.resume.educations[0]} getInfo={this.hasMany('educations')}/>
               <SkillsForm resume={this.state.resume.skills[0]} getInfo={this.hasMany('skills')} />
                <button onClick={() => this.patchData()}>Save</button>
            </div>
        )
    }
}

export default ResumeForm;