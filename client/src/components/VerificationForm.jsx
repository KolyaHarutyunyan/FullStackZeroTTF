import { useCallback, useEffect, useState } from "react";
import { isEmpty } from "../utils";
import DocumentUploadingArea from "./DocumentUploadingArea";
import FieldsArea from "./FieldsArea";
import axios from "axios";

const VerificationForm = () => {
  const [loading, setLoading] = useState(true);
  const [verificationForm, setVerificationForm] = useState(null);
  const [document, setDocument] = useState(verificationForm?.document || null);
  const [fields, setFields] = useState(verificationForm?.fields || null);

  useEffect(() => {
    axios
      .get("/verification-form")
      .then((resp) => {
        setVerificationForm(resp.data);
        setDocument(resp.data.document);
        setFields(resp.data.fields);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleFieldsChange = useCallback(((field) => {
    setFields(fields?.map((item) => item.name === field.name ? field : item));
  }), [fields]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!document && isEmpty(fields?.map((field) => field.value))) {
        alert("Please upload a Document or fill in one of the Fields to save.");
        return;
      }
      setLoading(true);
      setVerificationForm({ document, fields });
      axios
        .post("/verification-form", { document, fields })
        .then(resp => alert(resp.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    },
    [document, fields]
  );

  if (loading) return <h1 className="loading-msg">Please wait...</h1>;

  return (
    <div className="verification-form">
      <h1 className="verification-form__title">Verification UI</h1>
      <form onSubmit={handleSubmit}>
        <DocumentUploadingArea
          document={document}
          handleChange={setDocument}
        />
        <FieldsArea
          fields={fields}
          handleChange={handleFieldsChange}
        />
      </form>
    </div>
  );
};

export default VerificationForm;
