import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    kisanId: '',
    phoneNumber: '',
    otp: ['', '', '', '', '', ''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData({
      ...formData,
      otp: newOtp,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
    // Add form submission logic here
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.formTitle}>Login as Farmer</h2>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <div style={styles.formGroup}>
          <label style={styles.formLabel}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={styles.formInput}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.formLabel}>Kisan ID</label>
          <input
            type="text"
            name="kisanId"
            value={formData.kisanId}
            onChange={handleChange}
            placeholder="Enter your Kisan ID"
            required
            style={styles.formInput}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.formLabel}>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            style={styles.formInput}
          />
        </div>

        <div style={styles.otpContainer}>
          <label style={styles.formLabel}>Enter OTP</label>
          <div style={styles.otpInputs}>
            {formData.otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                required
                style={styles.otpInput}
              />
            ))}
          </div>
        </div>

        <button type="submit" style={styles.loginBtn}>
          Login
        </button>
      </form>
    </div>
  );
};

// Inline CSS
const styles = {
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  formTitle: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  loginForm: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    display: 'block',
    fontSize: '14px',
    color: '#555',
    marginBottom: '8px',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#333',
    transition: 'border-color 0.3s ease',
  },
  otpContainer: {
    marginBottom: '20px',
  },
  otpInputs: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  otpInput: {
    width: '40px',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  loginBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#00aaff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

// Hover styles for the button (dynamic)
styles.loginBtn[':hover'] = {
  backgroundColor: '#008fcc',
};

export default LoginForm;
