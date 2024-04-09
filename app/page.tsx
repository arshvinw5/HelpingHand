'use client';
import Sidebar from './_components/Sidebar';
import Feed from './_components/feed/Feed';
import User from './_api/User';
import Login from './auth/login/Login';
import Header from './_components/header/Header';

export default function Home() {
	const { user, fetchingData } = User();

	return (
		<>
			{fetchingData ? null : (
				<>
					{!user ? (
						<Login />
					) : (
						<main>
							<Header />
							<div className='flex justify-center w-full px-2.5'>
								{/* App Body */}
								<div className='flex w-full pt-5 px-2 bg-gray-50'>
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
							</div>
						</main>
					)}
				</>
			)}
		</>
	);
}

// {loading? 'add the loading component':'then rest of the code with user'}
