import Reac,{useState} from 'react';


const Step1 = ({ formData, handleChange, handleNextStep }) => {
  

  return (
    <div className="login-form-container">
      
      <h2>Basic Details</h2>
      <form className="login-form" onSubmit={handleNextStep}>
        <div className="form-group" >
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='name'
        />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Step1;
