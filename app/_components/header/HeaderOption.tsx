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
			{/* if we have the avatar then only it must be visible  */}
			{avatar && (
				<Avatar className='absolute h-[0px]	w-[10px] ' src={avatar}>
					{/* This might be undefine '?'  */}
					{user.displayName[0]}
				</Avatar>
			)}
			<h3 className='text-[12px] font-normal'>{title}</h3>
		</div>
	);
};

export default HeaderOption;

// // So, in {avatar && (...)}, if avatar is truthy, whatever is inside t
// he parentheses (represented by ...) will be rendered/executed.
// If avatar is falsy, nothing inside the parentheses will be rendered/executed.
