import React, { useState } from 'react';
import './Page.css';
import ResetImage from '../../assets/reset.jpg';


function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Updated password validation rules
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[@#$%^&*!]/.test(password);
  const isLengthValid = password.length >= 8 && password.length <= 16;
  const passwordsMatch = password === confirmPassword;

  const isValidPassword =
    hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isLengthValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isValidPassword) {
      alert("Password doesn't meet the required conditions.");
      return;
    }

    if (!passwordsMatch) {
      alert("Passwords don't match!");
      return;
    }

    console.log('Password reset to:', password);
    alert('Password successfully reset!');
  };

  return (
    <div className="form-container">
      <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontSize: '1.5rem', fontWeight: '700'  }}>Change Your Password</h1>
      <div> <img src={ResetImage} alt="Logo" width="200" /></div>
      <p style={{ fontFamily: 'helvetica, arial', color: ' #6b6b6b', fontSize: '14px', marginTop: '8px', marginBottom: '20px', textAlign: 'center' }}>Enter a new password below to change your <br></br>password</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Move validation list under confirm password */}
        <ul className="validation-list left-align">
          <li style={{ color: hasUppercase ? 'green' : 'grey' }}>
            At least one uppercase letter
          </li>
          <li style={{ color: hasLowercase ? 'green' : 'grey' }}>
            At least one lowercase letter
          </li>
          <li style={{ color: hasNumber ? 'green' : 'grey' }}>
            At least one number (0–9)
          </li>
          <li style={{ color: hasSpecialChar ? 'green' : 'grey' }}>
            At least one special character (@, #, $, etc.)
          </li>
          <li style={{ color: isLengthValid ? 'green' : 'grey' }}>
            Length must be between 8 and 16 characters
          </li>
        </ul>

        <button type="submit">Reset my password</button>

        {submitted && !passwordsMatch && (
          <p style={{ color: 'red', marginTop: '8px' }}>
            Passwords do not match!
          </p>
        )}

        <p style={{
          marginTop: '20px', fontSize: '14px', fontFamily: 'Poppins, sans-serif'
        }}>
          Return to<a href="/login" style={{ textDecoration: 'underline', color: '#007bff' }}> Sign In</a>
        </p>
      </form >
    </div >
  );
}

export default ResetPassword;




