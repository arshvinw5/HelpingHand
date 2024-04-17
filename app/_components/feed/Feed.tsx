'use client';
import { useEffect, useState } from 'react';

import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db, storage } from '../../_api/firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '@/app/_api/userSlice';
import FlipMove from 'react-flip-move';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

interface PostData {
	id: string;
	data: {
		name: string;
		description: string;
		message: string;
		photoUrl: string;
		timestamp: firebase.firestore.Timestamp;
	};
}

const Feed = () => {
	const user = useSelector(selectUser);
	//to fetch the date from 'firebase'then store
	const [posts, setPosts] = useState<PostData[]>([]);
	//to get the update value of input felid
	const [input, setInput] = useState<string>('');

	const [image, setImage] = useState<string>('');

	//connecting db to system then it
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot(async (snapshot) => {
				//we have set up all the date to post variable.
				await setPosts(
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
			postsImg: image,
		});
		//to clear the status in the feed
		setInput('');
	};

	const statusImgFun = async (e) => {
		e.preventDefault();

		const valOfImg = e.target.files[0];
		const fileRef = ref(storage, `postsImg/img/${v4()}`);
		//upload files to storage
		await uploadBytes(fileRef, e.target.files[0]).then(async (data) => {
			await getDownloadURL(data.ref).then((linkUrl) => {
				setImage(linkUrl);
			});
		});

		return valOfImg;
	};
	return (
		<div className='mx-[15px] md:mx-[10px]'>
			{/*Top status bar*/}
			<div className='shadow-xl p-10 md:mt-5 rounded-md pb-2.5 mb-2.5 bg-white'>
				<div className='border-gray-200 border-2 rounded-md flex p-2.5 text-gray-950 pl-4 '>
					<CreateIcon />
					<form action='' className='flex w-full'>
						<input
							type='text'
							placeholder={`What's on your mind ?`}
							className='focus:outline-none ml-2.5 font-medium text-gray-900'
							style={{ flex: 1 }}
							value={input}
							//need this to get values to input in state
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} className='font-semibold' type='submit'>
							Send
						</button>
					</form>
				</div>
				<div>
					<div className='my-3'>
						<img src={image} className='w-full' />
					</div>
				</div>
				{/*Input options*/}
				<div className='flex justify-evenly '>
					<label htmlFor='statusImg'>
						<InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
					</label>
					<label htmlFor='statusVid'>
						<InputOptions Icon={MusicVideoIcon} title='Video' color='#E7A33E' />
					</label>
					<InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOptions
						Icon={CalendarViewDayIcon}
						title='Write Article'
						color='#7FC15E'
					/>
					<input
						type='file'
						id='statusImg'
						style={{ display: 'none' }}
						onChange={(e) => {
							statusImgFun(e);
						}}
					/>
					<input
						type='file'
						id='statusVid'
						style={{ display: 'none' }}
						onChange={(e) => {
							statusImgFun(e);
						}}
					/>
				</div>
			</div>

			{/*Post TimeLine*/}
			<FlipMove>
				{posts.map(
					({
						id,
						data: { name, description, message, photoUrl, postsImg },
					}) => (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
							postsImg={postsImg}
						/>
					)
				)}
			</FlipMove>
		</div>
	);
};

export default Feed;
