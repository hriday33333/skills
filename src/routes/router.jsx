import { createBrowserRouter } from 'react-router';
import AuthLayout from '../Layout/AuthLayout';
import HomeLayout from '../Layout/HomeLayout';
import CategoryDetels from '../Pages/CategoryDetels';
import Home from '../Pages/Home';
import Loading from '../Pages/Loading';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import SingUp from '../Pages/SingUp';
import PrivateRoute from '../provider/PrivateRoute';
import ForgetPassword from '../Pages/ForgetPassword';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/category/:skillId',
        element: (
          <PrivateRoute>
            <CategoryDetels></CategoryDetels>
          </PrivateRoute>
        ),
        loader: () => fetch('/skills.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/singup',
        element: <SingUp></SingUp>,
      },
      {
        path: '/auth/skills',
        element: <Profile></Profile>,
      },
      {
        path: '/auth/forget-password',
        element: <ForgetPassword />,
      },
    ],
  },

  {
    path: '/*',
    element: <div>Error404</div>,
  },
]);
export default router;
