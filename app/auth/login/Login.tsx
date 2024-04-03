import Image from 'next/image';
import { routes } from '../../lib/assets/route_links';
// icon
import { FaGoogle } from 'react-icons/fa';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import Link from 'next/link';
import useAuth from '../useAuth';

const Login = () => {
	const { email, password, setEmail, setPassword, loginToApp } = useAuth();
	return (
		<div className='relative w-full h-screen bg-zinc-900/90'>
			<Image
				src='/img/login/Helping.jpg'
				alt='login_bg'
				className='absolute w-full h-screen object-cover overflow-hidden mix-blend-overlay'
				fill={true}
			/>
			<div className='flex justify-center items-center h-screen'>
				<form className='absolute bg-white max-w-[380px] md:max-w-[400px] w-full mx-auto p-10 rounded-md'>
					<div className='flex justify-center items-center py-4'>
						<h1 className='text-3xl md:text-4xl font-bold'>Helping Hands</h1>
						<Image
							src='/img/logo/Help.png'
							alt='logo'
							width={50}
							height={50}
							className='m-5 '
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
							className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
							placeholder='Email address'
						/>
					</div>
					<div className='flex flex-col mb-4'>
						<input
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							type='password'
							className='border relative bg-gray-100 p-2 focus:outline-none placeholder:text-gray-500'
							placeholder='Password'
						/>
					</div>
					<button
						onClick={loginToApp}
						className='w-full p-2 mt-2 border border-black hover:bg-black hover:text-white'
					>
						Sign In
					</button>
					<div className='flex justify-between py-8'>
						<button className='relative  flex justify-center items-center gap-3 border shadow-lg hover:shadow-xl px-6 py-2'>
							<FaGoogle />
							Google
						</button>
						<button className='relative flex justify-center items-center gap-3 border shadow-lg hover:shadow-xl px-6 py-2'>
							<TfiMicrosoftAlt />
							Microsoft
						</button>
					</div>
					<div className=' flex justify-center items-center gap-2 mt-2.5 text-center'>
						<p>New to Helping Hands ?</p>
						<span className='cursor-pointer font-bold'>
							<Link href={routes.signup}>Join with us.</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
