import { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFileUpload } from "../hooks";
import AllPagesPDFViewer from "./AllPagesPDF";
import acceptedFiles from "../acceptedFiles.json";

const DocumentUploadingArea = ({ document, handleChange }) => {
  const { file, errorMsg, handleFileChange } = useFileUpload(document);

  useEffect(() => {
    if (!handleChange) return;
    handleChange(file);
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFiles,
    onDrop: (files) => handleFileChange(files),
  });

  return (
    <div className="document-container" {...getRootProps()}>
      <input {...getInputProps()} />
      {file ? (
        <div className="document-container__file-box">
          {file.type === "application/pdf" ? (
            <AllPagesPDFViewer pdf={file.url} />
          ) : (
            <img src={file.url} alt="..." />
          )}
        </div>
      ) : errorMsg ? (
        <p style={{ color: "tomato" }}>{errorMsg}</p>
      ) : (
        <p>Document uploading area</p>
      )}
    </div>
  );
};

export default DocumentUploadingArea;
