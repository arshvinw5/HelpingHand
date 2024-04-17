'use client';
import User from '@/app/_api/User';
import Header from '@/app/_components/header/Header';
import Login from '@/app/auth/login/Login';

export default function Layout({ children }: { children: React.ReactNode }) {
	const { user } = User();
	return (
		<main>
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					{children}
				</>
			)}
		</main>
	);
}
