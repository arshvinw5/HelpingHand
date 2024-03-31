import { Avatar } from '@mui/material';
import React from 'react';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
	return (
		<div
			onClick={onClick}
			className='flex flex-col items-center mr-[20px] text-gray-600 cursor-pointer hover:text-black'
		>
			{Icon && <Icon />}
			{avatar && (
				<Avatar className='object-contain h-[23px] w-[23px]' src={avatar} />
			)}
			<h3 className='text-[12px] font-normal'>{title}</h3>
		</div>
	);
};

export default HeaderOption;
