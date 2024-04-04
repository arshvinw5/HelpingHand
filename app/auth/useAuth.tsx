'use client';
import { useEffect, useState } from 'react';
import { auth } from '../_api/firebase';
import { login } from '../_api/userSlice';
import { useDispatch } from 'react-redux';

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
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

	// we are sending data to redux by 'dispatch to change the user's data
	const dispatch = useDispatch();

	const [name, setName] = useState('');

	useEffect(() => {
		const name = `${firstName} ${surname}`;
		setName(name);
	}, [firstName, surname]);

	const loginToApp = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(auth, email, password);
	};

	const reg = async () => {
		if (!firstName && !surname) {
			return alert(`Please enter your first name and surname.`);
		}

		const userAuth = auth.createUserWithEmailAndPassword(email, password);
		const user = (await userAuth).user;

		console.log(user);

		if (user) {
			await user
				.updateProfile({
					displayName: name,
					photoURL: profilePic,
				})
				.then(() => {
					dispatch(
						login({
							email: user.email,
							uid: user.uid,
							displayName: name,
							photoUrl: user.profilePic,
						})
					);
				});
		} else {
			// Handle the case where user is null (e.g., if createUserWithEmailAndPassword fails)
			console.error('User authentication failed');
			// Optionally, you can display an error message to the user
			alert('User authentication failed. Please try again.');
		}
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
