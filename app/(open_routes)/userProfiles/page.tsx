'use client';
import Header from '@/app/_components/header/Header';
import CreateIcon from '@mui/icons-material/Create';
import User from '@/app/_api/User';
import useImg from './useImg';
import Link from 'next/link';
import { Avatar } from '@mui/material';

const Profiles = () => {
	const { user } = User();

	const { uploadDp, loading } = useImg();

	return (
		<>
			{user && (
				<>
					<Header />
					<div className='relative w-full '>
						<div className='flex justify-center mt-10'>
							<form className='absolute bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md shadow-xl'>
								{/* top section */}
								<div className='flex flex-col md:flex-row justify-between gap-10 items-center mb-3'>
									{/* Avatar */}
									<div className='flex justify-center items-center'>
										<label htmlFor='dp'>
											<Avatar
												className='mb-[10px] cursor-pointer object-contain'
												src={user.photoUrl}
												sx={{
													width: 120,
													height: 120,
													fontSize: 50,
													fontWeight: 600,
												}}
											>
												{user?.displayName[0]}
											</Avatar>
										</label>
										<input
											type='file'
											id='dp'
											style={{ display: 'none' }}
											disabled={loading}
											onChange={(e) => {
												uploadDp(e);
											}}
										/>
									</div>
									{/* input field */}
									<div className='flex flex-col justify-between md:gap-1 w-full '>
										<div className='flex flex-col mb-4'>
											<input
												type='text'
												className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
												placeholder='First name'
											/>
										</div>
										<div className='flex flex-col'>
											<input
												type='text'
												className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
												placeholder='Surname'
											/>
										</div>
									</div>
								</div>
								{/* bottom section */}
								<div className='flex flex-col mb-4'>
									<input
										type='email'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
										placeholder='Email address'
									/>
								</div>
								<div className='flex flex-col mb-4'>
									<input
										type='password'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
										placeholder='New password'
									/>
								</div>
								<button
									type='submit'
									className='w-full p-2 mt-2 border border-black hover:bg-black hover:text-white'
								>
									Update Profile
								</button>
							</form>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Profiles;
