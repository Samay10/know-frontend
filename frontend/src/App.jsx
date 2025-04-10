import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPage from './pages/ForgotPage';
import OtpPage from './pages/OtpPage';
import ResetPage from './pages/ResetPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/reset" element={<ResetPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;