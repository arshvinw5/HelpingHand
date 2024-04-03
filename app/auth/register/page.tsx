'use client';
import Image from 'next/image';
import Link from 'next/link';
import useAuth from '../useAuth';

export default function RegistrationPage() {
	const {
		firstName,
		setFirstName,
		surname,
		setSurname,
		email,
		setEmail,
		password,
		setPassword,
		reg,
	} = useAuth();

	return (
		<div>
			<div className='relative w-full h-screen bg-zinc-900/90'>
				<Image
					src='/img/login/Helping.jpg'
					alt='login_bg'
					className='absolute w-full h-screen object-cover overflow-hidden mix-blend-overlay'
					fill={true}
				/>
				<div className='flex justify-center items-center h-screen'>
					<form className='absolute bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md'>
						<div className='flex justify-between items-center py-1 border-b-2 border-gray-400 '>
							<h1 className='text-2xl md:text-3xl font-bold'>
								Welcome to Helping Hands
							</h1>
							<Image
								src='/img/logo/Help.png'
								alt='logo'
								width={50}
								height={50}
								className='m-5'
							/>
						</div>
						<div className='flex flex-col md:flex-row justify-between mt-8 md:gap-1 '>
							<div className='flex flex-col mb-4'>
								<input
									value={firstName}
									onChange={(e) => {
										setFirstName(e.target.value);
									}}
									type='text'
									className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
									placeholder='First name'
								/>
							</div>
							<div className='flex flex-col mb-4'>
								<input
									value={surname}
									onChange={(e) => {
										setSurname(e.target.value);
									}}
									type='text'
									className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
									placeholder='Surname'
								/>
							</div>
						</div>
						<div className='flex flex-col mb-4'>
							<input
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								type='email'
								className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
								placeholder='Email address'
							/>
						</div>
						<div className='flex flex-col mb-4'>
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								type='password'
								className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
								placeholder='New password'
							/>
						</div>
						<p className='mb-4 text-sm text-gray-500'>
							By clicking Sign Up, you agree to our
							<span> Terms, Privacy Policy </span> and
							<span> Cookies Policy </span>. You may receive Email notifications
							from us and can opt out at any time.
						</p>
						<button
							onClick={reg}
							className='w-full p-2 mt-2 border border-black hover:bg-black hover:text-white'
						>
							Sign Up
						</button>
						<div className='flex justify-center items-center mt-5 text-center'>
							<Link href='/'>
								<p className='text-sm font-medium'>Already have an account ?</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
