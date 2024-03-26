import Image from 'next/image';
import { Avatar } from '@mui/material';

const Sidebar = () => {
	const recentItem = (topic: string) => {
		return (
			<div className='flex text-[13px] text-gray-500 font-bold cursor-pointer p-1 hover:bg-[#F5F5F5] hover:rounded-sm hover:cursor-pointer hover:text-black'>
				<span className='mr-[10px] ml-[5px]'>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<div className='sticky top-[80px] '>
			<div className=' rounded-sm text-center'>
				{/* Sidebar Top */}
				<div className='flex flex-col items-center border-2 border-gray-400 border-b-0 rounded-tl-[10px] rounded-tr-[10px] bg-white pb-[10px] '>
					<Image
						src='/img/bg/bg.jpg'
						alt='bg'
						height={100}
						width={100}
						className='mb-[-20px] w-full h-[60px] rounded-tl-[10px] rounded-tr-[10px] object-cover'
					/>
					<Avatar
						className='mb-[10px] cursor-pointer object-contain '
						src='/img/profile/profile.jpg'
					/>
					<h2 className='text-[18px]'>Arshvin Waduge</h2>
					<h4 className='text-gray-600 text-[12px]'>tarshvin@gmail.com</h4>
				</div>
				{/* Sidebar status */}
				<div className='p-[20px] mb-[10px] rounded-bl-[10px] rounded-br-[10px]  border-gray-400 border-2 border-t-0 border-gray-40 bg-white'>
					{/*Track of volunteer hours*/}
					<div className='mt-[10px] flex justify-between gap-16'>
						<p className='text-gray-500 text-[10px] font-semibold'>
							Volunteer Hours
						</p>
						<p className='font-bold'>200h</p>
					</div>
					{/*Track of Availability */}
					<div className='mt-[10px] flex justify-between'>
						<p className='text-center'>Available </p>
					</div>
				</div>
				{/*Sidebar bottom*/}
				<div className='text-left p-[10px] border-2 border-gray-400 bg-white rounded-[10px] mt-[10px] '>
					<p className='text-[13px ] pb-[10px]'>Recent</p>
					{recentItem('Developer')}
					{recentItem('Js')}
					{recentItem('Rotaract')}
					{recentItem('LEO')}
					{recentItem('Helping Hand')}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
