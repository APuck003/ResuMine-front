import React, { Component } from 'react';

class SkillsForm extends Component {

    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.getInfo({
                    id: this.props.resume.id,
                    description: e.target.skill.value,
        
                })
            }}className="k-form">
                <fieldset>
                    <legend>Skills</legend>

                    <label className="k-form-field">
                        Skill 1<br></br>
                        <input name='skill' defaultValue={this.props.resume.description} className="k-textbox" placeholder="Skill 1" />
                    </label><br></br>
                    {/* <label className="k-form-field">
                        Skill 2<br></br>
                        <input className="k-textbox" placeholder="Skill 2" />
                    </label><br></br>
                    <label className="k-form-field">
                        Skill 3<br></br>
                        <input className="k-textbox" placeholder="Skill 3" />
                    </label><br></br>
                    <label className="k-form-field">
                        Skill 4<br></br>
                        <input className="k-textbox" placeholder="Skill 4" />
                    </label><br></br> */}

                <button onClick={this.props.addSkill}className="k-button">Add Skill</button>
                <br />
                <button className="k-button k-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default SkillsForm;