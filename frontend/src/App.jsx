import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import AllWorkouts from './pages/AllWorkouts';
import AddWorkout from './pages/AddWorkout';
import Stats from './pages/Stats';
import Profile from './pages/Profile';
import ViewWorkout from './pages/ViewWorkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { index: true, element: <AllWorkouts /> },
          { path: 'addworkout', element: <AddWorkout /> },
          { path: 'viewworkout/:id', element: <ViewWorkout /> },
          { path: 'stats', element: <Stats /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
