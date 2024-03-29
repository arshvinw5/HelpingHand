import Image from 'next/image';
import React, { useState } from 'react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');

	const loginToApp = (e: any) => {
		e.preventDefault();
	};
	const reg = () => {};
	return (
		<div className='grid place-items-center ml-auto mr-auto mt-14 pb-14 bg-white shadow-xl rounded-xl w-[50%]'>
			<div>
				<div className='flex justify-evenly items-center'>
					<Image
						src='/img/logo/Help.png'
						alt='logo'
						width={70}
						height={70}
						className='m-5'
					/>
					<h1>Helping Hand</h1>
				</div>
				<form className='flex flex-col '>
					{/* <input
						className='w-80 h-14 text-5 pl-2.5 mb-2.5 border-2 rounded-md border-black bg-transparent focus:outline-none'
						type='text'
						placeholder='Full name'
					/>
					<input
						className='w-80 h-14 text-5 pl-2.5 mb-2.5 border-2 rounded-md border-black bg-transparent focus:outline-none'
						type='text'
						placeholder='Last name'
					/> */}
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
