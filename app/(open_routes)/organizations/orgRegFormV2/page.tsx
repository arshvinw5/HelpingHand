'use client';
import React, { useState } from 'react';
import FormInput from './formInput';
import { Button } from '@/components/ui/button';

const OrgRegFormV2 = () => {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		status: '',
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
		},
		{
			id: 2,
			name: 'category',
			type: 'text',
			placeholder: 'Category',
		},
		{
			id: 3,
			name: 'status',
			type: 'text',
			placeholder: 'Status',
		},
		{
			id: 3,
			name: 'date',
			type: 'date',
			placeholder: 'Date',
		},
		{
			id: 4,
			name: 'location',
			type: 'text',
			placeholder: 'Location',
		},
		{
			id: 5,
			name: 'orgEmail',
			type: 'email',
			placeholder: 'Organization Email',
		},
		{
			id: 6,
			name: 'password',
			type: 'password',
			placeholder: 'Password',
		},
	];

	const onChangeFun = (e: any) => {
		let { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
			// For example, if the input field with name='firstName' changes to 'John', setValues updates values.firstName to 'John'.
		});
	};

	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<form
				onSubmit={handleCreateOrg}
				className='absolute flex flex-col bg-white max-w-[380px] md:max-w-[510px] w-full mx-auto p-10 rounded-md shadow-2xl'>
				<h1 className='text-center'>Welcome to this page</h1>
				{inputArr.map(({ id, name, type, placeholder }) => (
					<FormInput
						key={id}
						name={name}
						type={type}
						placeholder={placeholder}
						value={values[name]}
						//values[inputArr.name]
						onChange={onChangeFun}
					/>
				))}
				<Button>Create Organization</Button>
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
