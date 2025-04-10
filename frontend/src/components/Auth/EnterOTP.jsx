import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';
import otpImage from '../../assets/otp.png';


function EnterOTP() {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(45);
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verifying OTP:', otp);

    // Simulate correct OTP being 123456
    if (otp === '123456') {
      setFeedback('OTP Verified!');
      setFeedbackColor('green');
      setTimeout(() => {
        navigate('/reset');
      }, 1000); // short delay before navigation
    } else {
      setFeedback('Incorrect OTP, try again');
      setFeedbackColor('red');
    }
  };

  const handleResend = (e) => {
    e.preventDefault();
    console.log('Resending OTP...');
    setTimer(45);
    setFeedback('');
    setOtp('');
  };

  return (
    <div className="form-container">
      <h1 style={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontSize: '1.5rem', fontWeight: '700'  }}>OTP Verification</h1>
      <div> <img src={otpImage} alt="Logo" width="200" /></div>
      <div><p style={{ fontFamily: 'helvetica, arial', color: 'green', fontSize: '14px', marginTop: '8px', marginBottom: '20px', textAlign: 'center' }}>We've sent a verification code to your email</p></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter verification code"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <p style={{
          marginTop: '5px', fontSize: '12px', fontFamily: 'Poppins, sans-serif'
        }}>
          Want to Change Your Email Address ? <a href="/forgot" style={{ textDecoration: 'underline', color: '#007bff' }}> Change Here</a>
        </p>
        <button type="submit">Verify OTP</button>
      </form>

      {/* Feedback message */}
      {feedback && (
        <p className="feedback-text" style={{ color: feedbackColor }}>
          {feedback}
        </p>
      )}

      <div style={{ marginTop: '15px' }}>
        {timer > 0 ? (
          <p className="resend-text">Resend OTP in {timer}s</p>
        ) : (
          <a href=" " onClick={handleResend} className="resend-link">
            Resend OTP
          </a>
        )}
      </div>
    </div>
  );
}

export default EnterOTP;
