'use client';
import React, { useState } from 'react';
import FormInput from './formInput';
import { Button } from '@/components/ui/button';

const OrgRegFormV2 = () => {
	const [values, setValues] = useState({
		orgName: '',
		category: '',
		status: '',
		date: '',
		location: '',
		orgEmail: '',
		password: '',
	});

	//function to submit data
	const handleCreateOrg = (e: any) => {
		e.preventDefault();
		console.log(values);
	};

	const inputArr = [
		{
			id: 1,
			name: 'orgName',
			type: 'text',
			placeholder: 'Organization Name',
			errMessage:
				'Organization name should be more than 6 characters and should not include special characters ',
			pattern: '^[A-Za-z0-9]{3,16}$',
			required: false,
		},
		{
			id: 2,
			name: 'category',
			type: 'text',
			placeholder: 'Category',
			required: true,
		},
		{
			id: 3,
			name: 'status',
			type: 'text',
			placeholder: 'Status',
		},
		{
			id: 4,
			name: 'date',
			type: 'date',
			placeholder: 'Date',
		},
		{
			id: 5,
			name: 'location',
			type: 'text',
			placeholder: 'Location',
		},
		{
			id: 6,
			name: 'orgEmail',
			type: 'email',
			placeholder: 'Organization Email',
			errMessage: 'It should be valid email address',
			required: true,
		},
		{
			id: 7,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			errMessage:
				'Minimum eight characters, at least one letter, one number and one special character',
			pattern: '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
			required: true,
		},
	];

	const onChangeFun = (e: any) => {
		let { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
			// For example, if the input field with name='firstName' changes to 'John', setValues updates values.firstName to 'John'.
			// This name is used to identify which field in the values state object should be updated when the input value changes.
		});
	};

	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<form
				onSubmit={handleCreateOrg}
				className='absolute flex flex-col bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md shadow-2xl'>
				<h1 className='text-center'>Welcome to this page</h1>
				{inputArr.map(({ id, name, type, placeholder, errMessage, required, pattern }) => (
					<FormInput
						key={id}
						name={name}
						type={type}
						placeholder={placeholder}
						value={values[name]}
						//values[inputArr.name]
						// take the values's object then search the inputArr's name to get the value
						onChange={onChangeFun}
						errMessage={errMessage}
						required={required}
						pattern={pattern}
					/>
				))}
				<Button className='my-3'>Create Organization</Button>
			</form>
		</div>
	);
};

export default OrgRegFormV2;

// <FormInput
// 	name='firstName'
// 	placeholder='First Name'
// 	value={values.firstName}
// 	onChange={onChangeFun}
// />
