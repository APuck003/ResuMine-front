import React, {Component} from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

class ResumeDisplay extends Component {
  resume;
  
  exportPDF = () => {
    this.resume.save();
  }
  
  render() {
  
    
    
    return (
        <div>
          <div>
            <button onClick={this.exportPDF}>Download</button>
          </div>
          <PDFExport paperSize={'Letter'} fileName="ResuMine.pdf" title="" subject="" keywords="" ref={(r) => this.resume = r}>
    
            <div style={{height: 792, width: 612, padding: 'none', backgroundColor: 'white', boxShadow: '5px 5px 5px black', margin: 'auto',
              overflowX: 'hidden', overflowY: 'show'}} >
              
              <h1>Can you see me?</h1>
    
            </div>
  
  
          </PDFExport>
        </div>
    );
  }
}


export default ResumeDisplay;
