'use client';
import User from '@/app/_api/User';
import { auth } from '@/app/_api/firebase';
import Header from '@/app/_components/header/Header';
import { error } from 'console';
import React, { useState } from 'react';

const ResetPassword = () => {
	const { user } = User();

	const [email, setEmail] = useState<string>('');
	const [notify, setNotify] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const ResetPassword: React.MouseEventHandler<HTMLButtonElement> = async (
		e
	) => {
		e.preventDefault();
		if (!email) {
			return setNotify(`Invalid email address.`);
		}
		try {
			setLoading(true);
			await auth.sendPasswordResetEmail(email).then(() => {
				setNotify(`Check your email`);
			});
			setLoading(false);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<>
			{user && (
				<>
					<Header />
					<div className='relative w-full'>
						<div className='flex justify-center mt-10'>
							<form
								action=''
								className='absolute bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md shadow-xl'
							>
								<div className='flex justify-center items-center py-1 border-b-2 border-gray-400'>
									<span className='text-2xl md:text-3xl font-bold bg-[#fff]'>
										Reset Your Password
									</span>
								</div>
								<div className='flex flex-col my-5'>
									<p className='text-sm'>
										Forgot your account&apos;s password ? Enter your email
										address and we&apos;ll send you a recovery link.
									</p>
								</div>
								<div className='flex flex-col my-4'>
									<input
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										type='email'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
										placeholder='Update your email address'
									/>
								</div>
								<div className='text-sm text-center font-semibold text-[#EF6262] my-5'>
									<p>{notify}</p>
								</div>

								<button
									disabled={loading}
									onClick={ResetPassword}
									type='submit'
									className='w-full p-2 mt-2 border border-black hover:bg-black hover:text-white'
								>
									Send recovery email
								</button>
							</form>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ResetPassword;
