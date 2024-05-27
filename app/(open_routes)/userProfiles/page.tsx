'use client';
import User from '@/app/_api/User';
import Header from '@/app/_components/header/Header';
import { routes } from '@/app/lib/assets/route_links';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import DropDown from './dropDown';
import useImg from './useImg';

const Profiles = () => {
	const { user } = User();
	const direction = useRouter();
	const {
		updateProfile,
		loading,
		firstName,
		setFirstName,
		surname,
		setSurname,
		UpdateProfileItems,
		image,
		notify,
		bio,
		setBio,
		location,
		setLocation,
		setSelectValue,
	} = useImg();

	return (
		<>
			{user && (
				<>
					<Header />
					<div className='relative w-full '>
						<div className='flex justify-center mt-10'>
							<form className='absolute bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md shadow-xl'>
								<div className='flex justify-center items-center py-1 border-b-2 border-gray-400'>
									<span className='text-2xl md:text-3xl font-bold bg-[#fff]'>
										Edit Profile
									</span>
								</div>
								{/* top section */}
								<div className='flex flex-col md:flex-row justify-between gap-3 md:gap-5 items-center mt-5 mb-4 md:mb-0'>
									{/* Avatar */}
									<div className='relative group flex justify-center items-center'>
										<div className='p-1'>
											<label htmlFor='dp'>
												<Avatar
													src={image}
													className='mb-[10px] cursor-pointer object-contain group-hover:bg-black group-hover:text-white'
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
											<EditNoteIcon
												className='absolute bottom-3 right-0 text-gray-400  group-hover:text-black'
												sx={{
													width: 30,
													height: 30,
												}}
											/>
										</div>
										<input
											type='file'
											id='dp'
											style={{ display: 'none' }}
											disabled={loading}
											onChange={(e) => {
												updateProfile(e);
											}}
										/>
									</div>
									{/* input field */}
									<div className='flex flex-col justify-between md:gap-1 w-full '>
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
										<div className='flex flex-col'>
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
								</div>
								{/* bottom section */}
								<div className='flex flex-col mb-4'>
									<input
										value={bio}
										onChange={(e) => setBio(e.target.value)}
										type='bio'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500 h-14'
										placeholder='#Bio'
									/>
								</div>
								<div className='flex flex-col mb-4'>
									<input
										value={location}
										onChange={(e) => {
											setLocation(e.target.value);
										}}
										type='location'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
										placeholder='Location'
									/>
								</div>
								<div className='flex flex-col mb-4'>
									<input
										type='location'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
										placeholder='Birthday'
									/>
								</div>
								<div className='flex flex-col mb-4'>
									<DropDown setSelectValue={setSelectValue} />
								</div>
								<div className='text-sm text-start border-b border-gray-400 font-semibold my-3'>
									<p>Privacy ans safety</p>
								</div>
								<div className='flex flex-col mb-4'>
									<input
										type='email'
										className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
										placeholder='Update your email address'
									/>
								</div>
								<button
									onClick={(e) => direction.push(routes.ResetPassword)}
									className='flex flex-col mb-4'
								>
									<p className=''>Change your password ?</p>
								</button>
								<div className='text-sm text-center font-semibold text-[#EF6262] my-5'>
									<p>{notify}</p>
								</div>
								<button
									onClick={UpdateProfileItems}
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

{
	/* <label htmlFor='dp'>
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
</label> */
}
