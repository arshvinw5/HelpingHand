'use client';
import { useEffect, useState } from 'react';
import { auth } from '../_api/firebase';
import { login } from '../_api/userSlice';
import { useDispatch } from 'react-redux';

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { error } from 'console';

const useAuth = () => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [surname, setSurname] = useState('');
	const [password, setPassword] = useState('');
	const [profilePic, setProfilePic] = useState('');

	// we are sending data to redux by 'dispatch
	const dispatch = useDispatch();

	// const [name, setName] = useState('');

	// useEffect(() => {
	// 	const name = `${firstName} ${surname}`;
	// 	setName(name);
	// }, [firstName, surname]);

	const loginToApp = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password);
	};

	const reg = () => {
		if (!firstName && !surname) {
			return alert(`Please enter your first name and surname.`);
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				signInWithEmailAndPassword(auth, email, password).then(
					updateProfile(auth.currentUser, {
						displayName: `${firstName} ${surname}`,
					})
				);
			})
			.catch((err) => {
				alert(err);
			});

		// auth
		// 	.createUserWithEmailAndPassword(email, password)
		// 	.then((userAuth) => {
		// 		userAuth.user
		// 			.updateProfile({
		// 				displayName: name,
		// 				photoURL: profilePic,
		// 			})
		// 			.then(() => {
		// 				//dispatch to update redux state with user info
		// 				dispatch(
		// 					login({
		// 						email: userAuth.user.email,
		// 						uid: userAuth.user.uid,
		// 						displayName: name,
		// 						photoUrl: profilePic,
		// 					})
		// 				);
		// 			});
		// 	})
		// 	.catch((error) => alert(error));
	};

	return {
		firstName,
		setFirstName,
		surname,
		setSurname,
		email,
		setEmail,
		password,
		setPassword,
		profilePic,
		setProfilePic,
		reg,
		loginToApp,
	};
};

export default useAuth;
