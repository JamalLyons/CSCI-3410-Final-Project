import { useState } from 'react';
import axios from 'axios';

function CreateTask() {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		dueDate: '',
		priority: '',
		completed: false,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8080/tasks', formData);
			alert('Task created successfully!');
		} catch (error) {
			console.error('Error creating task:', error);
		}

		// Reset form
		setFormData({
			title: '',
			description: '',
			dueDate: '',
			priority: '',
			completed: false,
		})
	};

	return (
		<div className='bg-gray-100 p-4 rounded-lg'>
			<h2 className='text-xl font-bold mb-4'>Create New Task</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label
						className='block text-sm font-bold mb-2'
						htmlFor='title'>
						Title:
					</label>
					<input
						className='w-full px-3 py-2 border rounded-lg'
						type='text'
						name='title'
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-sm font-bold mb-2'
						htmlFor='description'>
						Description:
					</label>
					<textarea
						className='w-full px-3 py-2 border rounded-lg'
						name='description'
						value={formData.description}
						onChange={handleChange}></textarea>
				</div>
				<div className='mb-4'>
					<label
						className='block text-sm font-bold mb-2'
						htmlFor='dueDate'>
						Due Date:
					</label>
					<input
						className='w-full px-3 py-2 border rounded-lg'
						type='date'
						name='dueDate'
						value={formData.dueDate}
						onChange={handleChange}
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-sm font-bold mb-2'
						htmlFor='priority'>
						Priority:
					</label>
					<input
						className='w-full px-3 py-2 border rounded-lg'
						type='number'
						name='priority'
						value={formData.priority}
						onChange={handleChange}
					/>
				</div>
				<button
					className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
					type='submit'>
					Create
				</button>
			</form>
		</div>
	);
}

export default CreateTask;
