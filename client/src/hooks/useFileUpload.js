import { useState } from "react";
import acceptedFiles from "../acceptedFiles.json";

export const useFileUpload = (document) => {
  const [file, setFile] = useState(document);
  const [errorMsg, setErrorMsg] = useState("");

  const handleFileChange = (e) => {
    const fileType = e[0]?.type;
    if (!fileType || !(fileType in acceptedFiles)) {
      setErrorMsg("Only PDF & JPEG files are accepted");
      setFile(null);
    } else {
      setErrorMsg("");
      setFile({
        url: URL.createObjectURL(
          new File([e[0]], "image", { type: "text/json;charset=utf-8" })
        ),
        id: Date.now(),
        type: fileType,
      });
    }
  };

  return {
    file,
    errorMsg,
    handleFileChange,
  };
};
