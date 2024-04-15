// TaskList.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await axios.get('http://localhost:8080/tasks');
				setTasks(response.data);
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		};

		// Fetch tasks initially
		fetchTasks();

		// Fetch tasks every 3 seconds
		const interval = setInterval(() => {
			fetchTasks();
		}, 3000);

		// Cleanup function to clear interval
		return () => clearInterval(interval);
	}, []);

	const handleTaskDelete = async (e, id) => {
		e.preventDefault();
		try {
			await axios.delete(`http://localhost:8080/tasks/${id}`);
			alert('Task deleted successfully!');
		} catch (error) {
			console.error('Error deleting task:', error);
		}
	};

	const handleTaskMarkComplete = async (e, id) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:8080/tasks/${id}/complete`);
			alert('Task marked as completed successfully!');
		} catch (error) {
			console.error('Error marking task as completed:', error);
		}
	};

	return (
		<div className='bg-gray-100 p-4 rounded-lg'>
			<h2 className='text-xl font-bold mb-4'>Task List</h2>
			<ul>
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<li
							key={task.id}
							className='mb-4'>
							<div className='bg-white p-4 rounded-lg shadow'>
								<p>
									<strong>Title:</strong> {task.title}
								</p>
								<p>
									<strong>Description:</strong> {task.description}
								</p>
								<p>
									<strong>Due Date:</strong> {task.dueDate}
								</p>
								<p>
									<strong>Priority:</strong> {task.priority}
								</p>
								<p>
									<strong>Completed:</strong> {task.completed ? 'Yes' : 'No'}
								</p>
								<button
									disabled={task.completed}
									className={
										task.completed
											? 'bg-gray-500 text-white px-4 py-2 rounded-lg cursor-not-allowed'
											: 'bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
									}
									onClick={(e) => handleTaskMarkComplete(e, task.id)}>
									{
										task.completed ? 'Completed' : 'Mark as Completed'
									}
								</button>

								<button
									className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
									onClick={(e) => handleTaskDelete(e, task.id)}>
									Delete
								</button>
							</div>
						</li>
					))
				) : (
					<p>No tasks found.</p>
				)}
			</ul>
		</div>
	);
}

export default TaskList;
