'use client';
import { useEffect, useState } from 'react';

import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('posts').onSnapshot((snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	// Add button to post
	const sendPost = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: 'Arshvin Waduge',
			description: 'This is a test right now.',
			//this is getting the value from input felid then update the state of the input
			message: input,
			photoUrl: '',
			// this is related to get the time you
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	return (
		<div className='mx-[20px]'>
			{/*Top status bar*/}
			<div className='bg-white p-10 rounded-md pb-2.5 mb-2.5'>
				<div className='border-gray-200 border-2 rounded-md flex p-2.5 text-gray-950 pl-4 '>
					<CreateIcon />
					<form action='' className='flex w-full'>
						<input
							type='text'
							placeholder=''
							className='focus:outline-none ml-2.5 font-semibold text-black'
							style={{ flex: 1 }}
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} className='hidden' type='submit'>
							Send
						</button>
					</form>
				</div>
				{/*Input options*/}
				<div className='flex justify-evenly '>
					<InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOptions Icon={MusicVideoIcon} title='Video' color='#E7A33E' />
					<InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOptions
						Icon={CalendarViewDayIcon}
						title='Write Article'
						color='#7FC15E'
					/>
				</div>
			</div>

			{/*Post TimeLine*/}
			<div>
				{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
					<Post
						key={id}
						name={name}
						description={description}
						message={message}
						photoUrl={photoUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default Feed;
