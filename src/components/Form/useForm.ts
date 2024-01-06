import { useState, useEffect } from 'react';

const useForm = (state: any, validate: any, callback: any) => {
	const [values, setValues] = useState(state);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);
	return { handleChange, handleSubmit, values, errors };
};
export default useForm;
