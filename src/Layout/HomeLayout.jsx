import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

import { useNavigation } from 'react-router';
import Navbar from '../Components/Navbar';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header className="w-11/12 mx-auto mb-5">
        <nav className="">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer className="w-11/12 mx-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
