import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from 'firebase/auth';

import { useContext, useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import app from '../firebase/firebase.config';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRaf = useRef();

  const { login, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    setTimeout(() => {
      login(email, password)
        .then((result) => {
          setLoading(false);
          navigate(location.state ? location.state : '/');
        })
        .catch((err) => {
          setLoading(false);
          setError(err.code);

          toast.error(
            `❌ ${err.code.replace('auth/', '').replace(/-/g, ' ')}`,
            {
              position: 'top-center',
              style: {
                border: '1px solid #f87171',
                background: '#fee2e2',
                color: '#7f1d1d',
                fontWeight: '500',
                borderRadius: '10px',
              },
            }
          );
        });
    }, 3000);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`⚠️ ${error.message}`, {
          position: 'top-center',
          style: {
            border: '1px solid #fbbf24',
            background: '#fef3c7',
            color: '#78350f',
            fontWeight: '500',
            borderRadius: '10px',
          },
        });
      });
  };

  const handlePass = () => {
    const email = emailRaf.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please check your email!');
      })
      .catch();
  };

  return (
    <div
      className="flex justify-center min-h-screen items-center"
      data-aos="fade-up"
    >
      <Toaster />

      {loading && (
        <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      )}

      <div
        className="card bg-base-100 w-full max-w-sm shadow-2xl py-5"
        data-aos="zoom-in"
      >
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>

        <form
          onSubmit={handleLogIn}
          className="card-body"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              ref={emailRaf}
              className="input"
              placeholder="Email"
              required
              autoComplete="off"
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input pr-10"
                placeholder="Password"
                required
                autoComplete="off"
              />
              <span
                className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="my-1">
              <Link
                onClick={handlePass}
                to="/auth/forget-password"
                state={{
                  email: emailRaf.current?.value,
                }}
                className="link link-hover"
              >
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            {/* Login Button */}
            <button className="btn btn-neutral mt-4 w-full" disabled={loading}>
              Login
            </button>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-secondary btn-outline w-full mt-2 flex justify-center items-center gap-2"
              disabled={loading}
            >
              <FcGoogle size={24} /> Login with Google
            </button>

            {/* Signup */}
            <p className="font-semibold text-center pt-4">
              Don't have an account?{' '}
              <Link
                to="/auth/singup"
                className="text-blue-400 hover:text-blue-700"
              >
                Sign Up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
