'use client';
import Sidebar from './_components/Sidebar';
import Feed from './_components/feed/Feed';
import User from './_api/User';
import Login from './_components/login/Login';

export default function Home() {
	const { user } = User();

	return (
		<main className='flex justify-center bg-gray-100 w-full'>
			{/* App Body */}
			{!user ? (
				<Login />
			) : (
				<div className='flex bg-gray-100 w-full pt-5 px-2  '>
					{/* Using max-width for responsiveness */}
					<div style={{ flex: 0.2 }}>
						{/* Sidebar taking up 20% */}
						<Sidebar />
					</div>
					<div style={{ flex: 0.6 }}>
						{/* Feed taking up 60% */}
						<Feed />
					</div>
					<div style={{ flex: 0.2 }}>
						{/* Right taking up 20% */}
						{/* <Right /> */}
					</div>
				</div>
			)}
		</main>
	);
}
