import { Avatar } from '@mui/material';
import { wrap } from 'module';
import React from 'react';
import InputOptions from './InputOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = ({ name, description, message, photoUrl }) => {
	return (
		<div className='bg-white p-4 mb-2.5 rounded-md'>
			{/*Post header*/}
			<div className='flex mb-2.5'>
				<Avatar
					className='mb-[10px] cursor-pointer object-contain '
					src='/img/profile/profile.jpg'
				/>
				{/* Profile into */}
				<div className='ml-2.5'>
					<h2>{name}</h2>
					<p className='text-[12px] text-gray-500'>{description}</p>
				</div>
			</div>
			{/* Post body */}
			<div className='break-words'>
				<p>{message}</p>
			</div>
			{/* Post button */}
			<div className='flex'>
				<InputOptions Icon={ThumbUpIcon} title='Like' />
				<InputOptions Icon={CommentIcon} title='Comment' />
				<InputOptions Icon={IosShareIcon} title='Share' />
				<InputOptions Icon={SendOutlinedIcon} title='Send' />
			</div>
		</div>
	);
};

export default Post;
