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
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-2xl rounded-b-2xl px-0 md:px-6">
        {/* Left */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile dropdown button */}
          <div className="dropdown lg:hidden relative">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-4 shadow flex flex-col gap-3"
            >
              <NavLink className="hover:text-blue-500 transition" to="/">Home</NavLink>
              <NavLink className="hover:text-blue-500 transition" to="/all-items">All Items</NavLink>

              {user && (
                <>
                  <NavLink className="hover:text-blue-500 transition" to="/about">About</NavLink>
                  <NavLink className="hover:text-blue-500 transition" to="/contact">Contact</NavLink>
                  <NavLink className="hover:text-blue-500 transition" to="/support">Support</NavLink>
                  <NavLink className="hover:text-blue-500 transition" to="/auth/skills">My Profile</NavLink>
                </>
              )}

              <div className="divider divider-primary"></div>
              <div className="flex items-center text-orange-500 p-2 space-x-2">
                <h1 className="text-xl font-bold">My Profile</h1>
                <Link to="/auth/skills">
                  <img
                    className="w-9 md:w-12 rounded-full cursor-pointer border-2 hover:ring-2 hover:ring-blue-500 transition"
                    src={user ? user.photoURL : Logo}
                    alt="User"
                    title={user ? user.displayName || user.email : ''}
                  />
                </Link>
              </div>
            </ul>
          </div>

          {/* Logo */}
          <img className="w-15 lg:flex hidden" src={ReactLogo} alt="Logo" />
          <a className='-ms-5 flex  items-center gap-1 '>
            <span className="text-blue-500 text-xl md:text-3xl font-bold">
              Skill
            </span>
            <span className="font-semibold">
              Swa<span className="text-orange-500">p</span>s
            </span>
          </a>
        </div>

        {/* Center (Desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:px-1 flex md:gap-8 text-gray-700 font-medium">
            <NavLink className="hover:text-blue-500 transition" to="/">Home</NavLink>
            <NavLink className="hover:text-blue-500 transition" to="/all-items">All Items</NavLink>

            {user && (
              <>
                <NavLink className="hover:text-blue-500 transition" to="/about">About</NavLink>
                <NavLink className="hover:text-blue-500 transition" to="/contact">Contact</NavLink>
                <NavLink className="hover:text-blue-500 transition" to="/support">Support</NavLink>
                <NavLink className="hover:text-blue-500 transition" to="/auth/skills">My Profile</NavLink>
              </>
            )}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-2 md:gap-3">
          <Link to="/auth/skills">
            <img
              className="w-10 md:w-12 rounded-full hidden md:block cursor-pointer border-2 hover:ring-2 hover:ring-blue-500 transition"
              src={user ? user.photoURL : Logo}
              alt="User"
              title={user ? user.displayName || user.email : ''}
            />
          </Link>

          {user ? (
            <button
              className="btn btn-sm md:btn-outline bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center p-4 px-5 rounded-lg hover:scale-105 transition-transform"
              onClick={handleLogOut}
            >
              Log out
            </button>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-sm md:btn-outline bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center md:p-4 p-3 md:px-5 rounded-lg hover:scale-105 transition-transform "
              >
                Login
              </Link>
              <Link
                to="/auth/singup"
                className="btn btn-sm md:btn-outline bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center md:p-4 p-2 md:px-5 rounded-lg hover:scale-105 transition-transform"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
