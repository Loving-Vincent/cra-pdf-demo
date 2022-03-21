function PDFViewer({ file }) {
  return <iframe width='100%' height='500' scrolling='no' src={`/pdf/web/viewer.html?file=${file}`}></iframe>;
}

export default PDFViewer;
