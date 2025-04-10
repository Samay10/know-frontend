import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending OTP to:', email);

    // In real app, send email to backend here

    navigate('/otp'); // Go to OTP page
  };

  return (
    <div className="form-container">
      <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'black',fontSize: '1.5rem', fontWeight: '700'  }}>Forgot Password</h1>
      <p style={{ fontFamily: 'helvetica, arial', color: ' #6b6b6b', fontSize: '14px', marginTop: '8px', marginBottom: '20px', textAlign: 'center' }}>Provide the email address associated with your account to get an one time password (OTP)</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '300px' }}
        />
        <button type="submit">Send OTP</button>

        <p style={{ marginTop: '20px', fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>
          Return to <a href="/login" style={{ textDecoration: 'underline', color: '#007bff' }}>Sign In</a>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
