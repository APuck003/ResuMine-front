import React, { Component } from 'react';

class AddWorkHistoryForm extends Component {
    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.getInfo({
                    id: this.props.resume.id,
                    company: e.target.company.value,
                    position: e.target.position.value,
                    years: e.target.years.value,
                    responsibilities: e.target.responsibilities.value
                })
            }} className="k-form">
                <fieldset>
                    <legend>Work Experience</legend>

                    <label className="k-form-field">
                        Company<br></br>
                        <input name='company' defaultValue={this.props.resume.company} className="k-textbox" placeholder="Company" />
                    </label><br></br>
                    <label className="k-form-field">
                        Position<br></br>
                        <input name='position' defaultValue={this.props.resume.position} className="k-textbox" placeholder="Position" />
                    </label><br></br>
                    <label className="k-form-field">
                        Years Worked<br></br>
                        <input name='years' defaultValue={this.props.resume.years} className="k-textbox" placeholder="Years Worked" />
                    </label><br></br>
                    <label className="k-form-field">
                    Responsibilities<br></br>
                    <textarea name='responsibilities'  className="k-textarea">
                    Lorem Ipsum is simply dummy text.
                    </textarea>
                    </label><br></br>
                    <button onClick={this.props.addWork} className="k-button">Add Work Experience</button>
                <br />
                <button className="k-button k-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default AddWorkHistoryForm;