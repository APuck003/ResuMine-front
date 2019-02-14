import React, { Component } from 'react';



class PersonalInfoForm extends Component {

    // getInfo = (id) => {
    //     return this.state.resume.filter(res => res.)
    // }
    
    render(){
        // console.log(this.props)
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.getInfo({
                name: e.target.name.value,
                email: e.target.email.value,
                title: e.target.title.value,
                number: e.target.number.value,
                bio: e.target.bio.value
            })}} className="k-form">
                <fieldset>
                    <legend>Personal Info</legend>

                    <label className="k-form-field">
                        Name<br></br>
                        <input name='name' className="k-textbox" placeholder="Your Name" />
                    </label><br></br>
                    <label className="k-form-field">
                        Title<br></br>
                        <input name='title' className="k-textbox" placeholder="Title" />
                    </label><br></br>
                    <label className="k-form-field">
                        Email<br></br>
                        <input name='email' className="k-textbox" placeholder="Email" />
                    </label><br></br>
                    <label className="k-form-field">
                        Phone Number<br></br>
                        <input name='number' className="k-textbox" placeholder="Phone Number" />
                    </label><br></br>
                    <label className="k-form-field">
                    Bio<br></br>
                    <textarea name='bio' className="k-textarea">
                    Lorem Ipsum is simply dummy text.
                    </textarea>
                    </label>
                    <button className="k-button k-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default PersonalInfoForm;