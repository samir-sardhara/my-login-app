import React from "react";

const Step3 = ({
  formData,
  handleFileUpload,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div className="login-form-container">
      <h2>File Upload</h2>
      <form className="login-form" onSubmit={handleNextStep}>
        <div className="form-group">
        <input
          type="file"
          accept=".png,.pdf"
          onChange={handleFileUpload}
          required
        />
        </div>
        <button type="button" onClick={handlePreviousStep}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step3;
