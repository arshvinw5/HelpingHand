'use client';
import { Avatar } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';

const OrgRegPage = () => {
	const [orgName, setOrgName] = useState<string>('');
	const [orgCategory, setOrgCategory] = useState<string>('');
	const [orgBio, setOrgBio] = useState<string>('');
	const [orgLocation, setOrgLocation] = useState<string>('');
	const [orgEmail, setOrgEmail] = useState<string>('');
	const [notify, setNotify] = useState<string>('');

	const org = (e: any) => {
		e.preventDefault();
		if (!orgName && !orgEmail) {
			return setNotify(`Please fill the required field`);
		}
	};
	return (
		<div>
			<div>
				<div className='relative w-full h-screen'>
					<div className='flex justify-center items-center h-screen '>
						<form className='absolute bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md shadow-2xl'>
							<div className='flex justify-between items-center py-1 border-b-2 border-gray-400 '>
								<h1 className='text-2xl md:text-3xl font-bold'>Create an Organization</h1>
								<Image
									src='/img/logo/Help.png'
									alt='logo'
									width={50}
									height={50}
									className='m-5'
								/>
							</div>
							<p className='my-5 text-gray-500'>
								Your organization page is where people go to learn more about you. Make sure
								yours has all the information they may need.
							</p>

							<div className='flex flex-col md:flex-row justify-between gap-3 md:gap-5 items-center mt-5 mb-4 md:mb-0'>
								{/* Avatar */}
								<div className='relative flex justify-center items-center group'>
									<div className='p-1'>
										<label htmlFor='dp'>
											<Avatar
												src='/'
												className='mb-[10px] cursor-pointer object-contain group-hover:bg-black group-hover:text-white'
												sx={{
													width: 120,
													height: 120,
													fontSize: 50,
													fontWeight: 600,
												}}
											/>
										</label>
										<EditNoteIcon
											className='absolute bottom-3 right-0 text-gray-400  group-hover:text-black'
											sx={{
												width: 30,
												height: 30,
											}}
										/>
									</div>
									<input type='file' id='dp' style={{ display: 'none' }} />
								</div>
								{/* input field */}
								<div className='flex flex-col justify-between md:gap-1 w-full '>
									<div className='flex flex-col mb-4'>
										<input
											value={orgName}
											onChange={(e) => {
												setOrgName(e.target.value);
											}}
											type='text'
											className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
											placeholder='Organization Name (required)'
										/>
									</div>
									<div className='flex flex-col'>
										<input
											value={orgCategory}
											onChange={(e) => {
												setOrgCategory(e.target.value);
											}}
											type='text'
											className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
											placeholder='Category (required) '
										/>
									</div>
								</div>
							</div>
							<div className='flex flex-col mb-4'>
								<input
									value={orgBio}
									onChange={(e) => {
										setOrgBio(e.target.value);
									}}
									type='bio'
									className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500 h-40 '
									placeholder='#Bio'
								/>
							</div>
							<div className='flex flex-col mb-4'>
								<input
									value={orgLocation}
									onChange={(e) => {
										setOrgLocation(e.target.value);
									}}
									type='location'
									className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
									placeholder='Location'
								/>
							</div>
							<div className='flex flex-col mb-4'>
								<input
									value={orgEmail}
									onChange={(e) => {
										setOrgEmail(e.target.value);
									}}
									type='email'
									className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
									placeholder='Organization Email address'
								/>
							</div>
							<p className='text-sm text-center font-semibold text-[#EF6262] my-5'>
								{notify}
							</p>
							<button
								onClick={org}
								type='submit'
								className='w-full p-2 mt-2 border border-black hover:bg-black hover:text-white'>
								Create Organization
							</button>
							<p className='text-sm text-center font-semibold text-[#EF6262] my-5'></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrgRegPage;
