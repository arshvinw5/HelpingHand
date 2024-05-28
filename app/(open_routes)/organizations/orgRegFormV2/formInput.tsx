import { Input } from '@/components/ui/input';
import { useState } from 'react';

const FormInput = ({
	name,
	type,
	placeholder,
	value,
	onChange,
	errMessage,
	required,
	pattern,
}: any) => {
	const [isValid, setIsValid] = useState(true);
	const [isTouched, setIsTouched] = useState(false);

	const handleBlur = (e: any) => {
		setIsTouched(true);
		const input = e.target;

		// Check if the field is required and empty
		if (required && !input.value) {
			setIsValid(false);
			return;
		}

		// Check if the field matches the pattern
		if (pattern && !new RegExp(pattern).test(input.value)) {
			setIsValid(false);
			return;
		}

		setIsValid(true);
	};
	return (
		<div className='flex flex-col my-3'>
			<Input
				className={`bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0 ${
					!isValid && 'border-red-500'
				}`}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={handleBlur}
				required={required}
				pattern={pattern}
			/>
			{/* validation is not true and input felid is touched */}
			{!isValid && isTouched && (
				<span className='text-[12px] text-red-500 p-1'>{errMessage}</span>
			)}
		</div>
	);
};

export default FormInput;
