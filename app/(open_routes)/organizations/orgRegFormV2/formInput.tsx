import { Input } from '@/components/ui/input';

const FormInput = ({ name, type, placeholder, value, onChange, errMessage }: any) => {
	return (
		<div className='flex flex-col my-4'>
			<Input
				className='bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0'
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<span>{errMessage}</span>
		</div>
	);
};

export default FormInput;
