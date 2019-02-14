import React, { Component } from 'react';

class EducationForm extends Component {


    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.getInfo({
                    school: e.target.school.value,
                    yearsAttend: e.target.yearsAttend.value,
                    major: e.target.major.value,
                    degree: e.target.degree.value
                })
            }} className="k-form">
                <fieldset>
                    <legend>Education</legend>

                    <label className="k-form-field">
                        School<br></br>
                        <input name='school' className="k-textbox" placeholder="School" />
                    </label><br></br>
                    <label className="k-form-field">
                        Years Attended<br></br>
                        <input name='yearsAttend' className="k-textbox" placeholder="Years Attended" />
                    </label><br></br>
                    <label className="k-form-field">
                        Major<br></br>
                        <input name='major' className="k-textbox" placeholder="Major" />
                    </label><br></br>
                    <label className="k-form-field">
                    <br></br>
                    <input name='degree' type="checkbox" id="ch1" className="k-checkbox" />
                    <label className="k-checkbox-label" for="ch1">Degree</label>

                    </label>
                    <button className="k-button k-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default EducationForm;