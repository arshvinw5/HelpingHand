export default function Layout({
	children,
	login,
}: {
	children: React.ReactNode;
	login: React.ReactNode;
}) {
	const isLoading = false;
	return isLoading ? <>{children}</> : login;
}
