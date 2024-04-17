import ResetPassword from '@/app/auth/resetPassword/page';

export const routes = {
	home: '/',
	sitemap: '/sitemap.xml',
	signin: '/api/auth/signin',
	signup: '/auth/register',
	// signup: "/api/signup"
	signout: '/api/auth/signout',

	organization: '/organizations',
	profiles: '/userProfiles',
	ResetPassword: '/auth/resetPassword',
	ResetPasswordLoginPage: '/auth/resetPasswordLogin',
	chat: '/chat',
	events: '/event',
};
