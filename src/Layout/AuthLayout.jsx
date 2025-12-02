import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
  return (
    <div className="bg-base-300 min-h-screen ">
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </header>
    </div>
  );
};

export default AuthLayout;
