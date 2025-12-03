import { createBrowserRouter } from 'react-router';
import AuthLayout from '../Layout/AuthLayout';
import HomeLayout from '../Layout/HomeLayout';
import CategoryDetels from '../Pages/CategoryDetels';
import ForgetPassword from '../Pages/ForgetPassword';
import Home from '../Pages/Home';
import Loading from '../Pages/Loading';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import SingUp from '../Pages/SingUp';
import PrivateRoute from '../provider/PrivateRoute';

// New pages (you need to create simple components)
import About from '../Pages/About';
import AllItems from '../Pages/AllItems';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import Support from '../Pages/Support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // 🔥 All Items page → Open route (no private)
      {
        path: '/all-items',
        element: <AllItems />,
        loader: () => fetch('/skills.json'),
      },

      // 🔥 Category details → (You kept private, so kept same)
      {
        path: '/category/:skillId',
        element: (
          <PrivateRoute>
            <CategoryDetels />
          </PrivateRoute>
        ),
        loader: () => fetch('/skills.json'),
        hydrateFallbackElement: <Loading />,
      },

      // 🔥 About page
      {
        path: '/about',
        element: <About />,
      },

      // 🔥 Contact page
      {
        path: '/contact',
        element: <Contact />,
      },

      // 🔥 Support page
      {
        path: '/support',
        element: <Support />,
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/singup',
        element: <SingUp />,
      },
      {
        path: '/auth/skills',
        element: <Profile />,
      },
      {
        path: '/auth/forget-password',
        element: <ForgetPassword />,
      },
    ],
  },

  {
    path: '/*',
    element: <Error></Error>,
  },
]);

export default router;
