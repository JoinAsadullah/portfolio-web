export default function PdfViewer () {
    return (
      <div style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
        <embed src="AsadullahCV.pdf" type="application/pdf" style={{ width: '100%', height: '100%', overflow: 'hidden' }} />
      </div>
    );
  };