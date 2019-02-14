import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf'
import ResumeForm from './formComponents/ResumeForm'

class ResumeDispaly extends Component {

  
    exportPDF = () => {
      this.resume.save();
    }
    
    render() {
      
      return (
        
        <div className="App">
         <h1>Welcome to ResuMine!</h1>
          <div>
            <button onClick={this.exportPDF}>Download</button>
          </div>
          <PDFExport paperSize={'Letter'} fileName="{user.name}.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
            
            <div style={{height: 792, width: 612, padding: 'none', backgroundColor: 'white', boxShadow: '5px 5px 5px black', margin: 'auto',
              overflowX: 'hidden', overflowY: 'hidden'}} >
              
            
              
            </div>
         

            
          </PDFExport>
        </div>
      );
    }
  }
  
  
  
  export default ResumeDispaly;