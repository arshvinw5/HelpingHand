import Image from 'next/image';
import Link from 'next/link';
// Icon Import
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
	return (
		<div className='sticky'>
			<div className='w-full bg-white top-0 flex justify-evenly border-b-2 border-gray-300 z-50 '>
				{/* Header_left */}
				<div className='flex m-2'>
					<div className='object-contain mr-[10px]'>
						<Link href='/'>
							<Image
								src='/img/logo/Help.png'
								alt='logo'
								width={33}
								height={33}
							/>
						</Link>
					</div>
					<div className='flex p-4 m-1 items-center h-[22px] border-2 border-gray-500 rounded-md text-gray-950 bg-[#eef3f8]'>
						{/* Search Icon */}
						<input
							className='bg-none border-none outline-none bg-transparent'
							type='text'
						/>
						<SearchIcon className='cursor-pointer' />
					</div>
				</div>
				{/* Header_right */}
				<div className='flex m-2'>
					<HeaderOption Icon={HomeIcon} title='Home' />
					<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
					<HeaderOption Icon={BusinessCenterIcon} title='Communities' />
					<HeaderOption Icon={ChatIcon} title='Chat' />
					<HeaderOption Icon={NotificationsIcon} title='Notifications' />
					<HeaderOption avatar='/img/profile/profile.jpg' title='me' />
				</div>
			</div>
		</div>
	);
};

export default Header;
