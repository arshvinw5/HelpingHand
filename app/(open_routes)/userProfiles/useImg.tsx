'use client';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { auth, storage } from '../../_api/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { login } from '@/app/_api/userSlice';
import { getAuth } from 'firebase/auth';
import { count } from 'console';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/lib/assets/route_links';

const useImg = () => {
	const dispatch = useDispatch();
	const path = useRouter();

	//To update the Profile picture
	const [image, setImage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	//user information
	const [firstName, setFirstName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [notify, setNotify] = useState<string>('');

	const [displayName, setDisplayName] = useState<string>('');

	useEffect(() => {
		const fullName = `${firstName} ${surname}`;
		setDisplayName(fullName);
	}, [firstName, surname]);

	//Upload the dp
	const updateProfile = async (e: any) => {
		e.preventDefault();

		const fileRef = ref(storage, `imgDp/${v4()}`);
		//upload files to storage
		await uploadBytes(fileRef, e.target.files[0]).then(async (data) => {
			await getDownloadURL(data.ref).then((linkUrl) => {
				setImage(linkUrl);
			});
		});

		setNotify(`Image Uploaded`);
	};

	//to upload and update the profile

	const UpdateProfileItems: React.MouseEventHandler<HTMLButtonElement> = async (
		e
	) => {
		e.preventDefault();
		if (!firstName && !surname) {
			return setNotify(`Please enter your first name and surname.`);
		}

		try {
			auth.onAuthStateChanged(async (currentUser) => {
				setLoading(true);
				{
					currentUser &&
						(await currentUser
							?.updateProfile({
								displayName: displayName,
								photoURL: image,
							})
							.then(() => {
								dispatch(
									login({
										displayName: displayName,
										email: currentUser.email,
										uid: currentUser.uid,
										photoUrl: image,
									})
								);
							}));
					setLoading(false);
					path.replace(routes.home);
				}
			});
		} catch (error) {
			alert(error);
		}
	};

	//every time when we are fetching data from api we need to do it in useEffect

	// firebase need some amount of time to fetch data so you need set up things in a condition.

	// userCredential?.photoUrl -> userCredential=null && photoUrl=null otherwise this will state as 'undefined'

	return {
		image,
		updateProfile,
		loading,
		firstName,
		setFirstName,
		surname,
		setSurname,
		UpdateProfileItems,
		notify,
	};
};

export default useImg;

// to update profile

// useEffect(() => {
// 	auth.onAuthStateChanged(async (userCredential) => {
// 		setLoading(true);
// 		{
// 			userCredential &&
// 				userCredential
// 					?.updateProfile({
// 						displayName: userCredential.displayName,
// 						photoURL: image,
// 					})
// 					.then(() => {
// 						dispatch(
// 							login({
// 								displayName: userCredential.displayName,
// 								email: userCredential.email,
// 								uid: userCredential.uid,
// 								photoUrl: image,
// 							})
// 						);
// 					});
// 		}
// 		setLoading(false);
// 	});
// }, [image]);
