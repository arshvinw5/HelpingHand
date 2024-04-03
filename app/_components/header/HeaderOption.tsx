import { selectUser } from '@/app/_api/userSlice';
import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
	const user = useSelector(selectUser);
	return (
		<div
			onClick={onClick}
			className='flex flex-col items-center mr-[20px] text-gray-600 cursor-pointer hover:text-black'
		>
			{Icon && <Icon />}
			{avatar && (
				<Avatar
					className='object-contain h-[23px] w-[23px]'
					src={avatar}
				></Avatar>
			)}
			<h3 className='text-[12px] font-normal'>{title}</h3>
		</div>
	);
};

export default HeaderOption;
