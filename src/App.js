import React, { Component } from 'react';
import './App.css';
import ResumeDisplay from './ResumeDisplay'
import ResumeForm from './formComponents/ResumeForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {


  // addResumeToProfile = (resume) => {
  //   this.setState({resumes: [{...this.state.resumes, resume}]})
  // }

  // componentDidMount(){
  //   fetch('http://localhost:3000/resumes')
  //   .then(res => res.json())
  //   .then(resumes => {
  //     this.setState({
  //       resumes: resumes 
  //     })
  //   })
  // }
  
  
  render() {

    
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Route exact={true} path="/resumes" component={} */}
            <Route path="/resumes/:id/edit" component={ResumeForm}/>
            <Route path="/resumes/:id" component={ResumeDisplay}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}



export default App;
