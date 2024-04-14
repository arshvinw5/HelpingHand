export default function Layout({
	children,
	login,
}: {
	children: React.ReactNode;
	login: React.ReactNode;
}) {
	return (
		<>
			{children}
			{login}
		</>
	);
}
