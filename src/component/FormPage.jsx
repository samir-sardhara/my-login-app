import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import axios from "axios";

const FormPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    file: null,
    multiFiles: [],
    geolocationStatus: "",
  });

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file,
    }));
  };

  const handleMultiFileUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setFormData((prevFormData) => ({
      ...prevFormData,
      multiFiles: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to an API endpoint
    // using libraries like axios or fetch
    // After successful submission, you can update the status
    try {
      const response = await axios.get(
        " https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/",
        { email, password }
      );

      console.log("Login Successfully!");
    } catch (error) {
      if (error.response && error.response.status === 405) {
        console.log("Login failed: Method not allowed.");
      } else {
        console.log("Login failed. Please try again later.");
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      geolocationStatus: "Geolocation captured successfully.",
    }));
    handleNextStep();
  };

  return (
    <div>
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleFileUpload={handleFileUpload}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          handleMultiFileUpload={handleMultiFileUpload}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      {step === 5 && (
        <Step5 formData={formData} handlePreviousStep={handlePreviousStep} />
      )}
    </div>
  );
};

export default FormPage;
