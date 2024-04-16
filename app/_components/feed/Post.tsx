import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import InputOptions from './InputOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Image from 'next/image';

type postsTypes = {
	name: string;
	description: string;
	message: string;
	photoUrl: string;
	postsImg: string;
};

// eslint-disable-next-line react/display-name
const Post = forwardRef(
	({ name, description, message, photoUrl, postsImg }: postsTypes, ref) => {
		return (
			<div ref={ref} className='bg-white p-4 mb-2.5 rounded-md shadow-xl'>
				{/*Post header*/}
				<div className='flex mb-2.5'>
					<Avatar
						className='mb-[10px] cursor-pointer object-contain '
						src={photoUrl}
					>
						{name[0]}
					</Avatar>
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
				<div className='my-3'>
					{postsImg && (
						<>
							<img src={postsImg} alt={'Post Images'} className='w-full' />
						</>
					)}
				</div>
				{/* Post button */}
				<div className='flex'>
					<InputOptions Icon={ThumbUpIcon} title='Like' color={undefined} />
					<InputOptions Icon={CommentIcon} title='Comment' color={undefined} />
					<InputOptions Icon={IosShareIcon} title='Share' color={undefined} />
					<InputOptions
						Icon={SendOutlinedIcon}
						title='Send'
						color={undefined}
					/>
				</div>
			</div>
		);
	}
);

export default Post;
