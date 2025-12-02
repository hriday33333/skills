import { use } from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/kkkk.jpg';
import ReactLogo from '../assets/unnamed.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('Sign-out successful.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-2xl rounded-b-2xl px-0 md:px-6 ">
      {/* Left */}
      <div className="navbar-start flex items-center gap-2">
        {/* Mobile dropdown button */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-4 shadow flex flex-col gap-3"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/auth/skills">My Profile</NavLink>
          </ul>
        </div>

        {/* Logo */}
        <img className=" md:w-20 lg:flex hidden" src={ReactLogo} alt="Logo" />
        <a className="">
          <span className="text-blue-500 text-xl md:text-3xl font-bold">
            Skill
          </span>
          <span className="font-semibold">
            Swa<span className="text-orange-500 ">p</span>s
          </span>
        </a>
      </div>

      {/* Center (Desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal md:px-1 flex  md:gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/auth/skills">My Profile</NavLink>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end flex items-center gap-2 md:gap-3">
        <img
          className="w-10 md:w-12 rounded-full"
          src={user ? user.photoURL : Logo}
          alt="User"
          title={user ? user.displayName || user.email : ''}
        />
        {user ? (
          <button className="btn btn-sm md:btn-outline" onClick={handleLogOut}>
            Log out
          </button>
        ) : (
          <>
            <Link to="/auth/login" className="btn btn-sm md:btn-outline">
              Login
            </Link>
            <Link to="/auth/singup" className="btn btn-sm md:btn-outline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
