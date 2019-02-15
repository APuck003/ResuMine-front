import React, { Component } from 'react';

class EducationForm extends Component {


    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.getInfo({
                    id: this.props.resume.id,
                    school: e.target.school.value,
                    years_attended: e.target.years_attended.value,
                    major: e.target.major.value,
                    degree: e.target.degree.value
                })
            }} className="k-form">
                <fieldset>
                    <legend>Education</legend>

                    <label className="k-form-field">
                        School<br></br>
                        <input name='school' defaultValue={this.props.resume.school} className="k-textbox" placeholder="School" />
                    </label><br></br>
                    <label className="k-form-field">
                        Years Attended<br></br>
                        <input name='years_attended' defaultValue={this.props.resume.years_attended} className="k-textbox" placeholder="Years Attended" />
                    </label><br></br>
                    <label className="k-form-field">
                        Major<br></br>
                        <input name='major' defaultValue={this.props.resume.major} className="k-textbox" placeholder="Major" />
                    </label><br></br>
                    <label className="k-form-field">
                    <br></br>
                    <input name='degree' defaultValue={!this.props.resume.degree} type="checkbox" id="ch1" className="k-checkbox" />
                    <label className="k-checkbox-label" for="ch1">Degree</label>

                    </label><br></br>
                    <button onClick={this.props.addEducation} className="k-button">Add Education</button>
                <br />
                <button className="k-button k-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default EducationForm;