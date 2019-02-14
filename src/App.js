import React, { Component } from 'react';
import ResumeDisplay from './ResumeDisplay'
import ResumeForm from './formComponents/ResumeForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  
  
  
  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/resumes/:id/edit" component={ResumeForm}/>
            <Route path="/resumes/:id" component={ResumeDisplay} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
