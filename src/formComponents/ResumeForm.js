import React, { Component } from 'react';
import PersonalInfoForm from './PersonalInfoForm'
import SkillsForm from './SkillsForm'
import WorkHistoryForm from './WorkHistoryForm'
import EducationForm from './EducationForm'

import ResumeDisplay from '../ResumeDisplay'

// let updateElementInArray = (array, id, values) => {
//   return array.map( (element) => {
//     if(element.id === id){
//       return { ...element, ...values }
//     } else {
//       return element
//     }
//   })
// }

class ResumeForm extends Component {

    constructor(){
        super()
        this.state = {
           resume: false,
           work: [1],
           education: [1],
           skill: [1],
           newItemInput: ''
         
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

    addItem(e){
        e.preventDefault();
        const newItemInput = this.state
    }

     
     addWorkExperience = () => { 
        let counter = this.state.work.concat([this.state.work.length+1])
        this.setState({work: counter})
         
    //    console.log(this.state.resume.work_experiences)
        // this.setState({resume: updateElementInArray(this.state.resume, id,{
        //     work_experiences: resume.company 
        // } )})
     }


     addEducation = () => {
         let counter = this.state.education.concat([this.state.education.length+1])
         this.setState({education: counter})
     }

     addSkill =() => {
         let counter = this.state.skill.concat([this.state.skill.length+1])
         this.setState({skill: counter})
     }




     patchData = () => {
         const { user_id, educations, personal_info, work_experiences, skills } = this.state.resume
        let path = `/resumes/${this.props.match.params.id}`
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
        .then(this.props.history.push(path))
     }
    
    
    render() {
        
        if(!this.state.resume) return <div>Loading...</div>
         console.log(this.state.resume)
        return (
            <div>
                <h1>Create Your Resume!</h1>
               <PersonalInfoForm resume={this.state.resume.personal_info} getInfo={this.hasOne('personal_info')} />
               {this.state.work.map(work => { return <WorkHistoryForm resume={this.state.resume.work_experiences[0]} getInfo={this.hasMany('work_experiences')} addWork={this.addWorkExperience}/>}) }
              
                {this.state.education.map(education => {return  <EducationForm resume={this.state.resume.educations[0]} getInfo={this.hasMany('educations')}
                addEducation={this.addEducation}/>})}
               
               {this.state.skill.map(skill => {return <SkillsForm resume={this.state.resume.skills[0]} getInfo={this.hasMany('skills')} addSkill={this.addSkill} />})}
               
               
                <button onClick={() => this.patchData()}>Save</button>
            </div>
        )
    }
}

export default ResumeForm;