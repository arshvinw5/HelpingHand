'use client';
import { auth } from '@/app/_api/firebase';
import Image from 'next/image';
import { useState } from 'react';

const ResetPasswordLoginPage = () => {
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
		<div className='relative w-full h-screen bg-zinc-900/90'>
			<Image
				src='/img/login/Helping.jpg'
				alt='login_bg'
				className='absolute w-full h-screen object-cover overflow-hidden mix-blend-overlay'
				fill={true}
			/>
			<div className='flex justify-center items-center h-screen'>
				<form className='absolute bg-white max-w-[380px] md:max-w-[400px] w-full mx-auto p-10 rounded-md'>
					<div className='flex justify-center items-center py-4'>
						<h1 className='text-3xl md:text-4xl font-bold'>Helping Hands</h1>
						<Image
							src='/img/logo/Help.png'
							alt='logo'
							width={50}
							height={50}
							className='m-5 '
						/>
					</div>
					<div className='flex flex-col my-5'>
						<p className='text-sm'>
							Forgot your account&apos;s password ? Enter your email address and
							we&apos;ll send you a recovery link.
						</p>
					</div>

					<div className='flex flex-col mb-4'>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
							placeholder='Email address'
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
	);
};

export default ResetPasswordLoginPage;
