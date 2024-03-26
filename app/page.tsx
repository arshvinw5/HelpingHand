import Sidebar from './_components/Sidebar';
import Feed from './_components/feed/Feed';

export default function Home() {
	return (
		<main className='flex justify-center '>
			{/* App Body */}
			<div className='flex bg-gray-100 w-full pt-7 px-2  '>
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
			</div>{' '}
		</main>
	);
}
