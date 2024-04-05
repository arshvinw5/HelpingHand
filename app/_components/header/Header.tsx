'use client';
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
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../_api/firebase';
import { logout, selectUser } from '@/app/_api/userSlice';
import { signOut } from 'firebase/auth';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	// to sigh out
	const handelLogout = async () => {
		dispatch(logout());
		signOut(auth);
	};
	return (
		<div className='sticky'>
			<div className=' w-full bg-white top-0 flex justify-evenly border-b-2 border-gray-300 z-50 '>
				{/* Header_left */}
				<div className='flex m-2'>
					<div className='object-contain mr-[10px] my-1'>
						<Link href='/'>
							<Image
								src='/img/logo/Help.png'
								alt='logo'
								width={30}
								height={30}
							/>
						</Link>
					</div>
					<div className='flex p-4 m-1 items-center h-[22px] border-2 border-black rounded-md text-gray-950 bg-[#eef3f8] '>
						{/* Search Icon */}
						<input
							className='bg-none border-none outline-none bg-transparent placeholder:text-sm'
							type='text'
							placeholder='Search'
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
					<HeaderOption avatar={true} title='Log Out' onClick={handelLogout} />
				</div>
			</div>
		</div>
	);
};

export default Header;
