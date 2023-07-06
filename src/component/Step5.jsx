import React from "react";


const Step5 = ({ formData, handlePreviousStep }) => {
  return (
    <div className="login-form-container">
      <h2 >Status</h2>
      <p className="success-message">Form successfully submitted!</p>
      <button type="button" onClick={handlePreviousStep}>
        Previous
      </button>
    </div>
  );
};

export default Step5;
