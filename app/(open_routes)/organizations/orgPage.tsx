'use client';
import { useState } from 'react';
import { marketArr } from './orgArra';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/lib/assets/route_links';

const Organization = () => {
	const routePath = useRouter();

	const regForm = () => {
		routePath.push(routes.organizationRegForm);
	};

	const [market, setMarket] = useState(marketArr);

	const filterType = (status: any) => {
		const filteredMarket = marketArr.filter((item) => item.status === status);
		setMarket(filteredMarket);
	};
	const filterLocation = (location: any) => {
		const filteredLoc = marketArr.filter((item) => item.location === location);
		setMarket(filteredLoc);
	};

	return (
		<div className='max-w-[1640px] m-auto px-4 py-5'>
			<div className='flex justify-evenly items-center font-bold text-2xl md:text-6xl text-center my-20'>
				<h1>Do you wanna join with us ?</h1>
				<button
					onClick={regForm}
					className='border-4 p-3 rounded-xl border-black hover:bg-black hover:text-[#fff] '>
					Join
				</button>
			</div>
			{/* Featured Market */}

			{/*Filter Row*/}
			<div className='flex flex-col md:flex-row justify-between mt-5'>
				{/* filter type */}
				<div>
					<p className='font-bold text-gray-700 mb-4'>Filter Organizations</p>
					<div className='flex justify-between flex-wrap gap-5 mb-4'>
						<button
							onClick={() => setMarket(marketArr)}
							className='border-gray-950 border-[1px] rounded-md p-1.5 text-black hover:bg-black hover:text-white'>
							All
						</button>
						<button
							onClick={() => filterType('Latest')}
							className='border-gray-950 border-[1px] rounded-md p-1.5 text-black hover:bg-black hover:text-white'>
							Recent
						</button>
						<button
							onClick={() => {
								filterType('Urgent');
							}}
							className='border-gray-950 text-black border-[1px] rounded-md p-1.5 hover:bg-black hover:text-white'>
							Top Organization
						</button>
						<button
							onClick={() => filterType('Featured')}
							className='border-gray-950 text-black border-[1px] rounded-md p-1.5 hover:bg-black hover:text-white'>
							Featured
						</button>
						<button
							onClick={() => filterLocation('Galle')}
							className='border-gray-950 text-black border-[1px] rounded-md p-1.5 hover:bg-black hover:text-white'>
							Locations
						</button>
					</div>
				</div>
				{/* filter price */}
				<div>
					<p className='font-bold text-gray-700 mb-4'>Filter By Rating</p>
					<div className='flex flex-wrap gap-3 mb-4'>
						<button className='border-gray-950 border-[1px] rounded-md p-1.5 text-black hover:bg-black hover:text-white'>
							$$$
						</button>
						<button className='border-gray-950 border-[1px] rounded-md p-1.5 text-black hover:bg-black hover:text-white'>
							$$$$
						</button>
						<button className='border-gray-950 border-[1px] rounded-md p-1.5 text-black hover:bg-black hover:text-white'>
							$$$$$
						</button>
						<button className='border-gray-950 border-[1px] rounded-md p-1.5 text-black hover:bg-black hover:text-white'>
							$$$$$$
						</button>
					</div>
				</div>
			</div>
			{/* Display Market */}
			<div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 pt-4 '>
				{market.map(({ id, title, about, location, price, date, img: { src, alt } }) => (
					<Link key={id} href='/'>
						<div className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
							<Image
								src={src}
								alt={alt}
								width={200}
								height={200}
								className='w-full h-[200px] object-cover rounded-t-lg'
							/>
							<div>
								<div className='px-2 pt-1.5 '>
									<h4 className='pb-1.5 font-bold'>{title}</h4>
									<p className='text-sm'>{about}</p>
									<p className='text-gray-800'>
										<span>{price}</span>
									</p>
								</div>
								<div className='flex justify-between px-2 py-3 text-gray-500'>
									<p>{location}</p>
									<p>{date}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Organization;
