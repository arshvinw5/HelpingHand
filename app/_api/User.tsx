'use Client';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import { useEffect } from 'react';
import { auth } from '../_components/firebase';
import { login, logout } from '@/app/_api/userSlice';

const User = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		//this is listener for listen any authenticate state changes
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				//user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return { user };
};

export default User;
