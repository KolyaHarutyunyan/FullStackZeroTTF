import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { setupPdfJs } from "../utils";

setupPdfJs(pdfjs);

const AllPagesPDF = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);

  return (
    <Document
      file={pdf}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {Array.from(new Array(numPages), (_, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export default AllPagesPDF;
