'use Client';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectUser, setLoading } from './userSlice';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from '@/app/_api/userSlice';

const User = () => {
	const user = useSelector(selectUser);
	const loading = useSelector(selectLoading);
	const dispatch = useDispatch();

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

	return { user, loading };
};

export default User;