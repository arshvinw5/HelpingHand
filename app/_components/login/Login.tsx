import Image from 'next/image';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login } from '@/app/_api/userSlice';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	// we are sending data to redux by 'dispatch
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						photoUrl: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};

	const reg = () => {
		if (!name) {
			return alert(`Please enter the full name`);
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						//dispatch to update redux state with user info
						dispatch(
							login({
								email: userAuth.user?.email,
								uid: userAuth.user?.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};
	return (
		<div className='grid place-items-center ml-auto mr-auto mt-14 pb-14 bg-white shadow-xl rounded-xl w-[50%]'>
			<div>
				<div className='flex justify-evenly items-center'>
					<h1 className='text-[28px] font-bold'>Helping Hands</h1>
					<Image
						src='/img/logo/Help.png'
						alt='logo'
						width={50}
						height={50}
						className='m-5'
					/>
				</div>
				<form className='flex flex-col '>
					<input
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						className='w-80 h-14 text-5 pl-2.5 mb-2.5 border-2 rounded-md border-black bg-transparent focus:outline-none'
						type='text'
						placeholder='Full name'
					/>
					<input
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className='w-80 h-14 text-5 pl-2.5 mb-2.5 border-2 rounded-md border-black bg-transparent focus:outline-none'
						type='text'
						placeholder='Email | Username'
					/>
					<input
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						className='w-80 h-14 text-5 pl-2.5 mb-2.5 border-2 rounded-md border-black bg-transparent focus:outline-none '
						type='password'
						placeholder='Password'
					/>
					<button
						className='w-80 h-14 font-semibold border-2 rounded-md border-black hover:bg-black hover:text-white'
						onClick={loginToApp}
					>
						Sign In
					</button>
				</form>
				<div className='mt-5 text-center'>
					<p>
						New to Helping Hands ?{' '}
						<span className='cursor-pointer font-bold' onClick={reg}>
							Join now
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
