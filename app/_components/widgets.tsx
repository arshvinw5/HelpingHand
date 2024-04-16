import React from 'react';

const Widgets = () => {
	const recentItem = (topic: string) => {
		return (
			<div className='flex text-[13px] text-gray-500 font-bold cursor-pointer p-1 hover:bg-[#F5F5F5] hover:rounded-sm hover:cursor-pointer hover:text-black'>
				<span className='mr-[10px] ml-[5px]'>#</span>
				<p>{topic}</p>
			</div>
		);
	};

	return (
		<>
			<div className='md:sticky md:top-[80px] my-5 '>
				<div className=' rounded-sm text-center px-3 h-fit mx-[10px] md:mx-0'>
					{/*Recent*/}
					<div className='text-left p-[10px] shadow-xl bg-white rounded-[10px] mt-[10px] '>
						<h1 className='text-md uppercase font-semibold'>Recent Events</h1>
						{recentItem('Beach Clean Up')}
						{recentItem('Mentor a child or teen')}
						{recentItem('Help the homeless in Sri Lanka')}
						{recentItem('Make holidays special')}
						{recentItem('Mentor a child or teen')}
					</div>
					{/*On going*/}
					<div className='text-left p-[10px] shadow-xl bg-white rounded-[10px] mt-[10px] '>
						<h1 className='text-md uppercase font-semibold text-gray-600'>
							Treading on-going Events
						</h1>
						{recentItem('Build a home.')}
						{recentItem('Coach a team.')}
						{recentItem('Share your talents.')}
						{recentItem('Dog Care Project')}
					</div>
					{/*Long Events*/}
					<div className='text-left p-[10px] shadow-xl bg-white rounded-[10px] mt-[10px] '>
						<h1 className='text-md uppercase font-semibold text-gray-600'>
							Events
						</h1>
						{recentItem('Help the sick.')}
						{recentItem('Organize a fund-raiser.')}
						{recentItem('Nursing Internship in Sri Lanka ')}
					</div>
				</div>
			</div>
		</>
	);
};

export default Widgets;
