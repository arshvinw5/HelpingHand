import Image from 'next/image';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../_api/userSlice';
import { useRouter } from 'next/navigation';
import { routes } from '../lib/assets/route_links';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useEffect, useState } from 'react';
import { db } from '../_api/firebase';
import {
	QuerySnapshot,
	collection,
	getDocs,
	onSnapshot,
	query,
} from '@firebase/firestore';

const Sidebar = () => {
	const user = useSelector(selectUser);
	const path = useRouter();

	const [userProfiles, setUserProfiles] = useState([]);
	console.log({ userProfiles });

	useEffect(() => {
		db.collection('userProfiles').onSnapshot((snapshot) => {
			//we have set up all the date to post variable.
			setUserProfiles(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	const recentItem = (topic: string) => {
		return (
			<div className='flex text-[13px] text-gray-500 font-bold cursor-pointer p-1 hover:bg-[#F5F5F5] hover:rounded-sm hover:cursor-pointer hover:text-black'>
				<span className='mr-[10px] ml-[5px]'>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	const editProfile = () => {
		path.push(routes.profiles);
	};

	return (
		<div className='md:sticky md:top-[80px] my-5 '>
			<div className=' rounded-sm text-center px-3 h-fit mx-[10px] md:mx-0'>
				{/* Sidebar Top */}
				<div className='flex flex-col items-center shadow-xl rounded-tl-[10px] rounded-tr-[10px] bg-[#fff] pb-[10px]  '>
					<Image
						src='/img/bg/bg.jpg'
						alt='bg'
						height={100}
						width={100}
						className='mb-[-50px] w-full h-[80px] rounded-tl-[10px] rounded-tr-[10px] object-cover'
					/>
					<Avatar
						className='mb-[10px] cursor-pointer object-contain shadow-xl'
						sx={{
							width: 70,
							height: 70,
							fontSize: 30,
							fontWeight: 600,
						}}
						src={user.photoUrl}
					>
						{user?.displayName[0]}
					</Avatar>
					<h2 className='text-[18px] font-semibold'>{user.displayName}</h2>
					<h4 className='text-gray-600 text-[12px]'>{user.email}</h4>
				</div>
				{/* Sidebar status */}
				<div className='p-[20px] mb-[10px] rounded-bl-[10px] rounded-br-[10px] shadow-xl bg-[#fff]'>
					{/*Track of volunteer hours*/}
					<div className='flex justify-between gap-16'>
						<p className='text-gray-500 text-[10px] font-semibold'>
							Volunteer Hours
						</p>
						<p className='font-bold'>200h</p>
					</div>
					{/*Track of Availability */}
					<div className='mt-[10px] flex justify-between items-center'>
						<p className='text-center'>Available </p>
						<button
							onClick={editProfile}
							className='flex  justify-center items-center gap-1 m-0 px-[px] hover:bg-black hover:text-[#fff] hover:rounded-sm'
						>
							<EditNoteIcon
								className='cursor-pointer'
								sx={{ width: 12, height: 12 }}
							/>
							<p className='text-[11px]'>Edit Profile</p>
						</button>
					</div>
				</div>
				{/*Sidebar bottom*/}
				<div className='text-left p-[10px] shadow-xl bg-white rounded-[10px] mt-[10px] '>
					<p className='text-[13px ] pb-[10px]'>Bio</p>
					{userProfiles.map(({ id, data: { bioData } }, index) =>
						recentItem(bioData)
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
