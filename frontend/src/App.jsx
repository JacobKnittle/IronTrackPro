import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import AllWorkouts from './pages/AllWorkouts';
import AddWorkout from './components/AddWorkout';

import ViewWorkout from './pages/ViewWorkout';
import EditWorkout from './components/EditWorkout';
import { WorkoutsContextProvider } from './context/WorkoutsContext';
// import AddExercise from './components/AddExercise';

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
					{ path: 'editworkout/:id', element: <EditWorkout /> },
					// { path: 'addexercise/:id', element: <AddExercise /> },
					// { path: 'editexercise/:id', element: <EditWorkout /> },
				],
			},
		],
	},
]);

function App() {
	return (
		<WorkoutsContextProvider>
			<RouterProvider router={router} />;
		</WorkoutsContextProvider>
	);
}

export default App;
