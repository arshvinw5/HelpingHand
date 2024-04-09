'use client';
import Image from 'next/image';
import Link from 'next/link';
// Icon Import
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import ChatIcon from '@mui/icons-material/Chat';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../_api/firebase';
import { logout, selectUser } from '@/app/_api/userSlice';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/lib/assets/route_links';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const navDirect = useRouter();

	// to sigh out
	const handelLogout = async () => {
		dispatch(logout());
		signOut(auth);
		//for security
		navDirect.replace(routes.home);
	};
	return (
		<div className='sticky top-0 left-0 z-50'>
			<div className='relative w-full shadow-md bg-white flex justify-evenly items-center'>
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
					<div className='flex p-4 m-1 items-center h-[22px] border-2 border-black  text-gray-950 bg-[#eef3f8] '>
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
				<div className='fixed md:sticky bottom-0 left-0 flex justify-center md:max-w-[450px] w-full items-center mx-auto border-t-2 border-gray-200 md:border-t-0 py-5 md:py-1 md:m-2 bg-white'>
					<HeaderOption Icon={HomeIcon} title='Home' />
					<HeaderOption Icon={SupervisorAccountIcon} title='Organization' />
					<HeaderOption Icon={EditCalendarIcon} title='Events' />
					<HeaderOption Icon={ChatIcon} title='Chat' />
					<HeaderOption Icon={NotificationsIcon} title='Notifications' />
					<HeaderOption avatar={true} title='Log Out' onClick={handelLogout} />
				</div>
			</div>
		</div>
	);
};

export default Header;
