import React from 'react';

type feedOptions = {
	Icon?: React.ElementType;
	title: string;
	color?: string;
};

const InputOptions = ({ Icon, title, color }: feedOptions) => {
	return (
		<div className='flex items-center mt-4 text-gray-600 p-2.5 cursor-pointer  hover:text-black'>
			{Icon && <Icon style={{ color: color }} />}
			<h4 className='ml-1.5'>{title}</h4>
		</div>
	);
};

export default InputOptions;
