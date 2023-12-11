/* eslint-disable react/prop-types */
import { useState, createContext } from 'react';

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = (props) => {
	const [workouts, setWorkouts] = useState([]);
	const [selectedWorkout, setSelectedWorkout] = useState([]);
	const addWorkout = (newWorkout) => {
		setWorkouts([...workouts, newWorkout]);
	};

	return (
		<WorkoutsContext.Provider
			value={{
				workouts,
				setWorkouts,
				addWorkout,
				selectedWorkout,
				setSelectedWorkout,
			}}
		>
			{props.children}
		</WorkoutsContext.Provider>
	);
};
