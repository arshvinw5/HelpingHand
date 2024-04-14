'use client';
import { MouseEventHandler, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { auth, storage } from '../../_api/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { login } from '@/app/_api/userSlice';

const useImg = () => {
	const [image, setImage] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	console.log(image);

	const dispatch = useDispatch();

	const uploadDp = async (e: any) => {
		e.preventDefault();
		const fileRef = ref(storage, `imgDp/${v4()}`);
		//upload files to storage
		await uploadBytes(fileRef, e.target.files[0]).then(async (data) => {
			await getDownloadURL(data.ref).then((linkUrl) => {
				setImage(linkUrl);
			});
		});

		alert(`Image Uploaded`);
	};

	//to update profile

	useEffect(() => {
		auth.onAuthStateChanged(async (userCredential) => {
			setLoading(true);
			{
				userCredential &&
					userCredential
						?.updateProfile({
							displayName: userCredential.displayName,
							photoURL: image,
						})
						.then(() => {
							dispatch(
								login({
									displayName: userCredential.displayName,
									email: userCredential.email,
									uid: userCredential.uid,
									photoUrl: image,
								})
							);
						});
			}
			setLoading(false);
		});
	}, [image]);

	//every time when we are fetching data from api we need to do it in useEffect

	// firebase need some amount of time to fetch data so you need set up things in a condition.

	// userCredential?.photoUrl -> userCredential=null && photoUrl=null otherwise this will state as 'undefined'

	return { image, uploadDp, loading };
};

export default useImg;

// const dispatch = useDispatch();

// useEffect(() => {S
// 	auth.onAuthStateChanged(async (userCredential) => {
// 		await userCredential
// 			?.updateProfile({
// 				displayName: userCredential.displayName,
// 				photoURL: image,
// 			})
// 			.then(() => {
// 				dispatch(
// 					login({
// 						photoUrl: image,
// 					})
// 				);
// 			});
// 	});
// }, []);

// //function to add image url to firestore database
// const storeImgUrl = async () => {
// 	const dpUrlRef = collection(db, 'dpUrl');
// 	await addDoc(dpUrlRef, {
// 		dpUrl: image,
// 	});
// };

// const handleUpload = async (e: any) => {
// 	e.preventDefault();

// 	//this is creating the path to fire store
// 	const fileRef = ref(storage, `dpImg/${v4()}`);

// 	//`dpImg/${userCredential.uid}.png`
// 	// then upload the file
// 	await uploadBytes(fileRef, e.target.files[0]).then(async (data) => {
// 		await getDownloadURL(data.ref).then((urlLInk) => {
// 			setImage(urlLInk);
// 		});
// 	});
// };
