import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PDFViewer from './PDFViewer';

function App() {

  const [url, setUrl] = useState('');

  const viewPDF = () => {
    setUrl('https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={viewPDF}>
          PDF预览
        </p>

        <PDFViewer file={url} />
      </header>
    </div>
  );
}

export default App;
