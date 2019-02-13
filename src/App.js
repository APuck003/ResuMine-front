import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import './App.css';

class App extends Component {
  resume;
  
//   state = {
//     users: [];
//   }
//
//   componentDidMount() {
//     fetch("rails server")
//         .then(res => res.json())
//         .then(users => this.setState({users: users.map(user => ({...user, exists: false}))}
// }
  
  exportPDF = () => {
    this.resume.save();
  }
  
  render() {
    
    return (
      <div className="App">
        <div>
          <button onClick={this.exportPDF}>Download</button>
        </div>
        <PDFExport paperSize={'Letter'} fileName="{user.name}.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
          
          <div style={{height: 792, width: 612, padding: 'none', backgroundColor: 'white', boxShadow: '5px 5px 5px black', margin: 'auto',
            overflowX: 'hidden', overflowY: 'hidden'}} >user.bio</div>
       
          
          
        </PDFExport>
      </div>
    );
  }
}

// Working Branch Testing

export default App;
