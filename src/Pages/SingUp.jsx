import { use, useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingUp = () => {
  const { createUser, setUser, updateUser, googleSignIn } = use(AuthContext);
  const [nameError, setNamerror] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNamerror('Name Should be more then 5 character');
      return;
    } else {
      setNamerror('');
    }
    const Photo = form.Photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (!hasUppercase) {
      setPasswordError('Password must have at least one uppercase letter');
      return;
    } else if (!hasLowercase) {
      setPasswordError('Password must have at least one lowercase letter');
      return;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    } else {
      setPasswordError('');
    }

    setLoading(true);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: Photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: Photo });
            setLoading(false);
            navigate('/');
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
            setLoading(false);
          });
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert(error.message);
      });
  };

  return (
    <div
      className="flex justify-center min-h-screen items-center"
      data-aos="fade-up"
    >

      {loading && (
        <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      )}

      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5"
        data-aos="zoom-in"
      >
        <h2 className="font-semibold text-2xl text-center">
          Sing up your account
        </h2>
        <form
          onSubmit={handleSingUp}
          className="card-body"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}

            <label className="label">Photo URL</label>
            <input
              name="Photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input pr-10"
                placeholder="Password"
                required
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
            {passwordError && <p className="text-xs text-error">{passwordError}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Sing up
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-secondary btn-outline w-full mt-2"
            >
              <FcGoogle size={24} /> Login with Google
            </button>

            <p className="font-semibold text-center pt-4">
              Allready Have an Account ?{' '}
              <Link
                to="/auth/login"
                className="text-blue-400 hover:text-blue-700"
              >
                Login
              </Link>{' '}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
