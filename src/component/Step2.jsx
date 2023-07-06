import React from "react";

const Step2 = ({
  formData,
  handleChange,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div className="login-form-container">
      <h1>Address</h1>
      <form className="login-form" onSubmit={handleNextStep}>
        <div className="form-group">
          <label htmlFor="addressLine1">Address 1:</label>
          <input
            type="text"
            id="addressLine1"
            placeholder="adderess line 1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressLine2">Address 2:</label>
          <input
            type="text"
            id="addressLine2"
            placeholder="address line 2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            placeholder="city"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            placeholder="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            placeholder="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
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

export default Step2;
