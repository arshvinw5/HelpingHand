'use Client';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setLoading } from './userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from '@/app/_api/userSlice';

const User = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	console.log({ user });

	useEffect(() => {
		//this is listener for listen any authenticate state changes
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				//user is logged in
				dispatch(
					login({
						displayName: userAuth.displayName,
						email: userAuth.email,
						uid: userAuth.uid,
						photoUrl: userAuth.photoURL,
					})
				);
				dispatch(setLoading(false));
			} else {
				//user is logged out
				dispatch(logout());
			}
		});
	}, []);

	return { user };
};

export default User;
