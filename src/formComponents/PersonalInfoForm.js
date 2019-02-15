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
                id: this.props.resume.id,
                name: e.target.name.value,
                email: e.target.email.value,
                title: e.target.title.value,
                phone: e.target.phone.value,
                bio: e.target.bio.value
            })}} className="k-form">
                <fieldset>
                    <legend>Personal Info</legend>

                    <label className="k-form-field">
                        Name<br></br>
                        <input name='name' defaultValue={this.props.resume.name} className="k-textbox" placeholder="Your Name" />
                    </label><br></br>
                    <label className="k-form-field">
                        Title<br></br>
                        <input name='title' defaultValue={this.props.resume.title} className="k-textbox" placeholder="Title" />
                    </label><br></br>
                    <label className="k-form-field">
                        Email<br></br>
                        <input name='email' defaultValue={this.props.resume.email} className="k-textbox" placeholder="Email" />
                    </label><br></br>
                    <label className="k-form-field">
                        Phone Number<br></br>
                        <input name='phone' defaultValue={this.props.resume.phone} className="k-textbox" placeholder="Phone Number" />
                    </label><br></br>
                    <label className="k-form-field">
                    Bio<br></br>
                    <textarea name='bio' ref="newText" defaultValue={this.props.resume.bio}/>
                    </label>
                    <button className="k-button k-primary">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default PersonalInfoForm;