'use Client';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

const User = () => {
	const user = useSelector(selectUser);
	return { user };
};

export default User;
