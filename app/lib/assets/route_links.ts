import ResetPassword from '@/app/auth/resetPassword/page';

export const routes = {
	home: '/',
	sitemap: '/sitemap.xml',
	signin: '/api/auth/signin',
	signup: '/auth/register',
	// signup: "/api/signup"
	signout: '/api/auth/signout',
	forgot_password: '/auth/forgot-password',

	privacy_policy: '/en/privacy-policy',
	terms_of_use: '/en/terms-of-service',

	marketplace: '/en/ads',
	vehicle_details_base: '/en/ad',
	sharable_image_base: '/en/sharable',
	vehicle_compare: '/en/compare',
	post_ad: '/p/post-ad',
	user_profile_base: '/p/user/profile',
	verify_email_telephone: '/p/user/verify',
	user_ads_base: '/p/user/my-ads',
	favourites: '/p/user/favourites',
	request_vehicle: '/p/request-vehicle',
	organization: '/organizations',
	profiles: '/userProfiles',
	ResetPassword: '/auth/resetPassword',
	ResetPasswordLoginPage: '/auth/resetPasswordLogin',
};
