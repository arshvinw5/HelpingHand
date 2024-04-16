import React from 'react';
import useImg from './useImg';
import Select from 'react-select';
const DropDown = () => {
	const options = [
		{ value: 'individual ', label: 'Individual' },
		{ value: 'organization ', label: 'Organization ' },
	];
	const { selectValue, setSelectValue } = useImg();
	return (
		<div className='flex flex-col w-full border'>
			<Select
				className='placeholder:text-gray-500 bg-gray-100'
				options={options}
				placeholder='Seek your passion ?'
				onChange={setSelectValue}
			/>
		</div>
	);
};

export default DropDown;
