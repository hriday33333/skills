import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {

    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      setEmail('');
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();

    window.location.href = 'https://mail.google.com';
  };

  return (
    <div
      className="flex justify-center min-h-screen items-center bg-gray-50"
      data-aos="fade-up"
    >
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-6" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold text-center mb-4">Reset Your Password</h2>
        <form onSubmit={handleReset} className="card-body" data-aos="fade-up" data-aos-delay="100">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Reset Password
            </button>
            <button
              type="button"
              onClick={() => navigate('/auth/login')}
              className="btn btn-outline mt-3 w-full"
            >
              Back to Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
