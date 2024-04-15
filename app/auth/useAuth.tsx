'use client';
import { useEffect, useState } from 'react';
import { auth, storage } from '../_api/firebase';
import { login } from '../_api/userSlice';
import { useDispatch } from 'react-redux';
import {
	GoogleAuthProvider,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { routes } from '../lib/assets/route_links';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const useAuth = () => {
	const [email, setEmail] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [profilePic, setProfilePic] = useState<string>('');
	const [notify, setNotify] = useState<string>('');

	//to route to page you want if push you can go back but replace you cannot route back page.
	const navDirect = useRouter();

	// we are sending data to redux by 'dispatch to change the user's data
	const dispatch = useDispatch();

	const [displayName, setDisplayName] = useState<string>('');

	useEffect(() => {
		const fullName = `${firstName} ${surname}`;
		setDisplayName(fullName);
	}, [firstName, surname]);

	//Login page function
	const loginToApp: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(auth, email, password);
		//ser email and password back to empty
		setEmail('');
		setPassword('');
	};

	const uploadDp = async (e: any) => {
		e.preventDefault();
		const fileRef = ref(storage, `imgDp/${v4()}`);
		//upload files to storage
		await uploadBytes(fileRef, e.target.files[0]).then(async (data) => {
			await getDownloadURL(data.ref).then((linkUrl) => {
				setProfilePic(linkUrl);
			});
		});

		alert(`Profile Image Uploaded`);
	};

	//Registration Page function
	const reg: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault();

		if (!firstName && !surname) {
			return alert(`Please enter your first name and surname.`);
		}

		try {
			const userCredential = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			const user = userCredential.user;

			if (user) {
				// Update user profile
				await user.updateProfile({
					displayName: displayName,
					photoURL: profilePic,
				});

				// Send email verification
				await sendEmailVerification(user);

				// Wait for user to refresh their data
				await user.reload();

				// Check if email is verified
				if (user.emailVerified) {
					// Email is verified, login user and redirect to home
					dispatch(
						login({
							email: user.email,
							uid: user.uid,
							displayName: displayName,
							photoUrl: profilePic,
						})
					);
					navDirect.replace(routes.home);
				} else {
					// Email is not verified, inform user to verify email
					setNotify(
						'Please verify your email address. Check your inbox for the verification email.'
					);
				}
			} else {
				console.error('User authentication failed');
				alert('User authentication failed. Please try again.');
			}
		} catch (error: any) {
			console.error('Error creating user:', error.message);
			alert(`Error creating user: ${error.message}`);
		}
	};

	const googleSignIn = async () => {
		const provider = new GoogleAuthProvider();

		try {
			await signInWithPopup(auth, provider).then((result) => {
				if (result) {
					auth.onAuthStateChanged((credential: any) => {
						console.log({ credential });
					});
				}
			});
		} catch (error: any) {
			console.error('Error creating user:', error.message);
			alert(`Error creating user: ${error.message}`);
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
		reg,
		loginToApp,
		notify,
		googleSignIn,
		uploadDp,
	};
};

export default useAuth;

// if (user) {

// 	await sendEmailVerification(user);
// 	await user
// 		.updateProfile({
// 			displayName: displayName,
// 			photoURL: profilePic,
// 		})
// 		.then(() => {
// 			//this will store the data in redux slice
// 			dispatch(
// 				login({
// 					email: user.email,
// 					uid: user.uid,
// 					displayName: displayName,
// 					photoUrl: profilePic,
// 				})
// 			);
// 		});
