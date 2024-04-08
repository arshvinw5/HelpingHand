'use client';
import { useEffect, useState } from 'react';

import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../../_api/firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '@/app/_api/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
	const user = useSelector(selectUser);
	//to fetch the date from 'firebase'then store
	const [posts, setPosts] = useState([]);
	//to get the update value of input felid
	const [input, setInput] = useState('');

	//connecting db to system then it
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				//we have set up all the date to post variable.
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			});
	}, []);

	// Add button to post
	const sendPost = async (e) => {
		e.preventDefault();
		await db.collection('posts').add({
			name: user.displayName,
			description: user.email,
			//this is getting the value from input felid then update the state of the input
			message: input,
			photoUrl: user.photoUrl || user.displayName[0],
			// this is related to get the time you
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		//to clear the status in the feed
		setInput('');
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
							className='focus:outline-none ml-2.5 font-medium text-gray-900'
							style={{ flex: 1 }}
							value={input}
							//need this to get values to input in state
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} className='' type='submit'>
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
			<FlipMove>
				{posts.map(
					({ id, data: { name, description, message, photoUrl } }, index) => (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
						/>
					)
				)}
			</FlipMove>
		</div>
	);
};

export default Feed;
