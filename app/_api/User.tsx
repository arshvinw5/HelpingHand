'use client';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectUser, setLoading } from './userSlice';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { login, logout } from '@/app/_api/userSlice';
import { resolve } from 'path';

const User = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const [fetchingData, setFetchingData] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setFetchingData(false);
	// 	}, 600);
	// }, []);

	useEffect(() => {
		const checkFetchingDataFromUser = async () => {
			await new Promise((resolve) => setTimeout(resolve, 600));
			setFetchingData(false);
		};

		checkFetchingDataFromUser();
		// Call the checkFetchingDataFromUser function
	}, [user]);

	// we need this useEffect when the user tigers

	useEffect(() => {
		//this is listener for listen any authenticate state changes
		auth.onAuthStateChanged(async (userCredential) => {
			if (userCredential) {
				//user is logged in
				dispatch(
					login({
						displayName: userCredential.displayName,
						email: userCredential.email,
						uid: userCredential.uid,
						photoUrl: userCredential.photoURL,
					})
				);
				dispatch(setLoading(false));
			} else {
				//user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return { user, fetchingData };
};

export default User;

// Inside the useEffect, there's a function named
// checkFetchingData. This function is defined as an asynchronous
// function using the async keyword. This means it can use the await
// keyword to pause execution until an asynchronous operation completes.

// Within checkFetchingData, there's a Promise created using new Promise().
//  This promise resolves after a delay of 500 milliseconds using setTimeout(resolve, 500).
